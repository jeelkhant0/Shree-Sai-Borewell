import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, details } = body;

        // Validation
        if (!name || !email || !phone || !service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email Content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'info.shreesaiborewell@gmail.com',
            subject: `New Quote Request: ${service} - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #0a192f; border-bottom: 2px solid #0a192f; padding-bottom: 10px;">New Inquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service Required:</strong> ${service}</p>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
                        <h3 style="margin-top: 0;">Project Details:</h3>
                        <p style="white-space: pre-wrap;">${details || 'No details provided.'}</p>
                    </div>

                    <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was sent from the Shree Sai Borewell website contact form.</p>
                </div>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
