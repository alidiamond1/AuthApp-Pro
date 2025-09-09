import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

// Create the Neon serverless SQL client
export const sql = neon(process.env.DATABASE_URL);

// Database schema initialization
export const initializeDatabase = async () => {
  try {
    // Create users table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

// Types for user data
export interface User {
  id: string;
  username: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

export interface CreateUserInput {
  username: string;
  email: string;
  password_hash: string;
}
