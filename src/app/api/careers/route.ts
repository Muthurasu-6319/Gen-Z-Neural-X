import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'careers.json');

export async function GET() {
  try {
    const filePath = getFilePath();
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ careers: [] });
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const careers = JSON.parse(fileContent);
    return NextResponse.json({ careers });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const filePath = getFilePath();
    
    let careers = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      careers = JSON.parse(fileContent);
    }
    
    const newCareer = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    careers.push(newCareer);
    fs.writeFileSync(filePath, JSON.stringify(careers, null, 2));
    
    return NextResponse.json({ success: true, career: newCareer });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create career' }, { status: 500 });
  }
}
