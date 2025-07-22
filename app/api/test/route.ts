import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'API is working!',
    hasResendKey: !!process.env.RESEND_API_KEY,
    keyLength: process.env.RESEND_API_KEY?.length || 0,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({
      message: 'POST request received',
      receivedData: body,
      hasResendKey: !!process.env.RESEND_API_KEY,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }
} 