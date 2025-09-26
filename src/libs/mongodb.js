import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('MONGODB_URI is not defined. Database features will be disabled.');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(retryCount = 0) {
  console.log("this is uri",MONGODB_URI)
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000; // 1 second

  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URI) {
    throw new Error('MongoDB URI is not configured');
  }

  if (!cached.promise) {
    // Updated options to match the working sample more closely
    const opts = {
      // Server API configuration (like in the sample)
      serverApi: { 
        version: '1', 
        strict: true, 
        deprecationErrors: true 
      },
      
      // Connection options
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 8000,
      socketTimeoutMS: 45000,
      family: 4, // Force IPv4
      retryWrites: true,
      w: 'majority',
      
      // Additional helpful options
      connectTimeoutMS: 10000,
      heartbeatFrequencyMS: 10000,
      maxIdleTimeMS: 30000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then(async (mongoose) => {
        console.log('✅ Connected to MongoDB');
        
        // Test the connection with a ping (like in the sample)
        try {
          await mongoose.connection.db.admin().command({ ping: 1 });
          console.log('✅ MongoDB ping successful');
        } catch (pingError) {
          console.warn('⚠️ MongoDB ping failed:', pingError.message);
        }
        
        return mongoose;
      })
      .catch(async (error) => {
        console.error(`❌ MongoDB connection failed (attempt ${retryCount + 1}/${MAX_RETRIES + 1}):`, error.message);
        
        // Log more specific error details
        if (error.code) {
          console.error('Error code:', error.code);
        }
        if (error.codeName) {
          console.error('Error code name:', error.codeName);
        }
        
        cached.promise = null;
        
        if (retryCount < MAX_RETRIES) {
          console.log(`🔄 Retrying in ${RETRY_DELAY}ms...`);
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
          return connectToDatabase(retryCount + 1);
        }
        
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Health check function
export async function checkDatabaseConnection() {
  try {
    const conn = await connectToDatabase();
    
    // Additional health check with ping
    await conn.connection.db.admin().command({ ping: 1 });
    
    return { connected: true, error: null };
  } catch (error) {
    return { connected: false, error: error.message };
  }
}

// Graceful connection wrapper
export async function withDatabase(operation) {
  try {
    await connectToDatabase();
    return await operation();
  } catch (error) {
    console.error('Database operation failed:', error);
    throw error;
  }
}

// Connection event listeners for better debugging
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('🔥 Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('📴 Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('📴 MongoDB connection closed due to app termination');
  process.exit(0);
});

export default connectToDatabase;