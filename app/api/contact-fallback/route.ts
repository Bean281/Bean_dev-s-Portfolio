import { NextRequest, NextResponse } from 'next/server';

// Fallback endpoint for debugging
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Log the contact form submission
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Time:', new Date().toISOString());
    console.log('===============================');

    // In production, you can check your deployment logs to see these messages
    return NextResponse.json(
      { message: 'Contact form submitted successfully (logged to console)' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Fallback API error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 