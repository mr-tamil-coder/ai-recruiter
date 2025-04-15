import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

await dbConnect();

export async function POST(request) {
  try {
    const { email, password, fullName, companyName, isLogin } = await request.json();
    
    if (isLogin) {
      // Login logic
      const user = await User.findOne({ email }).select('+password');
      
      if (!user) {
        return NextResponse.json(
          { success: false, message: 'Invalid credentials' },
          { status: 401 }
        );
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (!isMatch) {
        return NextResponse.json(
          { success: false, message: 'Invalid credentials' },
          { status: 401 }
        );
      }
      
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '30d' }
      );
      
      return NextResponse.json({
        success: true,
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          companyName: user.companyName
        }
      });
    } else {
      // Signup logic
      const existingUser = await User.findOne({ email });
      
      if (existingUser) {
        return NextResponse.json(
          { success: false, message: 'User already exists' },
          { status: 400 }
        );
      }
      
      const user = await User.create({
        fullName,
        companyName,
        email,
        password
      });
      
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '30d' }
      );
      
      return NextResponse.json({
        success: true,
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          companyName: user.companyName
        }
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}