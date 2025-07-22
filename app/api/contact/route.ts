import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@resend.dev>', // Using Resend's verified domain
      to: ['ndthung281@gmail.com'], // Your email where you want to receive messages
      replyTo: email, // So you can reply directly to the person who contacted you
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fefefe; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 6px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      // Also send a plain text version
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const response = NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 