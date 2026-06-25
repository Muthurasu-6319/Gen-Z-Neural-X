import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Save to Firestore
    try {
      await addDoc(collection(db, 'final-year-project-submissions'), {
        ...data,
        submittedAt: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error('Firestore error:', dbError);
    }

    // Send email to admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'genzdevoff@gmail.com',
        pass: 'xoqo zmwu gqjd zphz',
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9ff; padding: 32px; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #3730a3, #6366f1); padding: 24px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">📚 New Final Year Project Request</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Gen Z Neural-X Platform</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.entries(data).map(([key, value]) => `
          <tr style="border-bottom: 1px solid #e4e6f5;">
            <td style="padding: 12px 8px; font-weight: 600; color: #3730a3; width: 40%; font-size: 14px; text-transform: capitalize;">${key.replace(/([A-Z])/g, ' $1').trim()}</td>
            <td style="padding: 12px 8px; color: #0a0a0f; font-size: 14px;">${value}</td>
          </tr>`).join('')}
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #9499c9; text-align: center;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
    `;

    await transporter.sendMail({
      from: 'genzdevoff@gmail.com',
      to: 'info@genzneuralx.com',
      subject: `🎓 Final Year Project Request – ${data.fullName} (${data.collegeName})`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
