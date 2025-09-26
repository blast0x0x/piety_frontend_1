import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import connectDB from '@/libs/mongodb'
import "./globals.css";
import App from "./app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Initialize database connection when the app starts (server-side only)
if (typeof window === 'undefined') {
  connectDB().catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
}

export const metadata = {
  title: "Piety Token",
  description: "Your digital token platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <App>{children}</App>
      </body>
    </html>
  );
}