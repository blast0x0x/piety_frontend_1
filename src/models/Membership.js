import mongoose from 'mongoose';

const MembershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  membershipType: {
    type: String,
    required: true,
    enum: ['premium', 'vip'],
  },
  investedAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  referralCode: {
    type: String,
    trim: true,
    default: '',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'succeeded', 'failed', 'canceled'],
    default: 'pending',
  },
  stripePaymentIntentId: {
    type: String,
    required: true,
  },
  stripeCustomerId: {
    type: String,
    default: '',
  },
  applicationStatus: {
    type: String,
    enum: ['submitted', 'approved', 'rejected', 'pending'],
    default: 'submitted',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Create indexes for better performance
MembershipSchema.index({ email: 1 });
MembershipSchema.index({ stripePaymentIntentId: 1 });
MembershipSchema.index({ paymentStatus: 1 });
MembershipSchema.index({ createdAt: -1 });

// Pre-save middleware to update the updatedAt field
MembershipSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Membership || mongoose.model('Membership', MembershipSchema);