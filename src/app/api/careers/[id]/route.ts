import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'careers.json');

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await req.json();
    const filePath = getFilePath();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Career not found' }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let careers = JSON.parse(fileContent);
    
    const index = careers.findIndex((c: any) => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Career not found' }, { status: 404 });
    }
    
    careers[index] = { ...careers[index], ...data };
    fs.writeFileSync(filePath, JSON.stringify(careers, null, 2));
    
    return NextResponse.json({ success: true, career: careers[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update career' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const filePath = getFilePath();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Career not found' }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let careers = JSON.parse(fileContent);
    
    const newCareers = careers.filter((c: any) => c.id !== id);
    
    if (newCareers.length === careers.length) {
      return NextResponse.json({ error: 'Career not found' }, { status: 404 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(newCareers, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete career' }, { status: 500 });
  }
}
