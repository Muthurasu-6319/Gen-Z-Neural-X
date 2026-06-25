import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { formType, ...fields } = data;

    // Save to responses.json
    try {
      const dataDir = path.join(process.cwd(), 'src', 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, 'responses.json');
      
      let existingData = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(fileContent);
      }
      
      const newEntry = {
        id: Date.now().toString(),
        formType: formType || 'Contact Form',
        ...fields,
        submittedAt: new Date().toISOString(),
      };
      
      existingData.push(newEntry);
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    } catch (fsError) {
      console.error('File system error:', fsError);
      // We continue even if saving to file fails, to at least send the email
    }

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
      to: 'info@genzneuralx.com',
      subject: `New Website Submission: ${formType || 'Contact'}`,
      text: `You have received a new submission from the ${formType || 'Contact'}.\n\nDetails:\n\n${formattedFields}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
