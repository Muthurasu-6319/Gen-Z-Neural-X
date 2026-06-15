import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formType, ...fields } = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'genzdevoff@gmail.com',
        pass: 'xoqo zmwu gqjd zphz',
      },
    });

    const formattedFields = Object.entries(fields)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n\n');

    const mailOptions = {
      from: 'genzdevoff@gmail.com',
      to: 'genzdevoff@gmail.com',
      subject: `New Website Submission: ${formType}`,
      text: `You have received a new submission from the ${formType}.\n\nDetails:\n\n${formattedFields}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
