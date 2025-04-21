import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { author } from '@/lib/content/portfolio';

// Set up nodemailer with Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || author.email,
    pass: process.env.EMAIL_PASSWORD || '',
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

export async function POST(request: Request) {
  try {
    const { fullName, email, subject, message } = await request.json();

    // Input validation
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill all the required fields' },
        { status: 400 }
      );
    }

    // Get current date and time
    const date = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || author.email,
      to: author.email,
      subject: `Your Portfolio: ${subject}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Subject: ${subject}
        Date: ${date}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f9fafb;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.12);
              background-color: #ffffff;
            }
            .header {
              background-color: #111827;
              background-image: linear-gradient(135deg, #111827, #312e81);
              color: white;
              padding: 25px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
            .header p {
              margin: 10px 0 0;
              opacity: 0.8;
              font-size: 16px;
            }
            .content {
              padding: 30px;
            }
            .info-section {
              background-color: #f8fafc;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 25px;
              border-left: 4px solid #6366f1;
            }
            .message-section {
              background-color: #f8fafc;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 5px;
              border-left: 4px solid #8b5cf6;
            }
            .info-item {
              margin-bottom: 12px;
              display: flex;
              align-items: flex-start;
            }
            .info-item:last-child {
              margin-bottom: 0;
            }
            .label {
              font-weight: 600;
              color: #4b5563;
              width: 80px;
              flex-shrink: 0;
            }
            .value {
              color: #111827;
              flex-grow: 1;
            }
            .message-content {
              white-space: pre-line;
              color: #1f2937;
              line-height: 1.8;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #6b7280;
              margin-top: 30px;
              padding: 20px 30px;
              background-color: #f1f5f9;
              border-top: 1px solid #e5e7eb;
            }
            .accent {
              color: #6366f1;
              font-weight: 600;
            }
            .btn {
              display: inline-block;
              background-color: #6366f1;
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 6px;
              font-weight: 500;
              margin-top: 5px;
              margin-bottom: 15px;
            }
            .divider {
              height: 1px;
              background-color: #e5e7eb;
              margin: 25px 0;
            }
            @media only screen and (max-width: 600px) {
              .container {
                margin: 0;
                width: 100%;
                border-radius: 0;
              }
              .content {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Message</h1>
              <p>Someone has reached out through your portfolio</p>
            </div>
            
            <div class="content">
              <a href="mailto:${email}" class="btn">Reply to ${fullName}</a>
              
              <div class="info-section">
                <div class="info-item">
                  <span class="label">From:</span>
                  <span class="value">${fullName}</span>
                </div>
                <div class="info-item">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></span>
                </div>
                <div class="info-item">
                  <span class="label">Subject:</span>
                  <span class="value">${subject}</span>
                </div>
                <div class="info-item">
                  <span class="label">Date:</span>
                  <span class="value">${date}</span>
                </div>
              </div>
              
              <div class="message-section">
                <h2 style="margin-top: 0; margin-bottom: 15px; font-size: 18px; color: #4b5563;">Message</h2>
                <div class="message-content">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your <span class="accent">Portfolio Website</span> contact form.</p>
              <p>&copy; ${new Date().getFullYear()} ${author.name}. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 