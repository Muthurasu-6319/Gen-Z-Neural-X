import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'responses.json');
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ responses: [] });
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const responses = JSON.parse(fileContent);
    return NextResponse.json({ responses });
  } catch (error) {
    console.error('Error fetching responses:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch responses' }, { status: 500 });
  }
}
