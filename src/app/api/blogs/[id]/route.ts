import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'blogs.json');

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await req.json();
    const filePath = getFilePath();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let blogs = JSON.parse(fileContent);
    
    const index = blogs.findIndex((b: any) => b.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    blogs[index] = { ...blogs[index], ...data };
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blog: blogs[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const filePath = getFilePath();
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let blogs = JSON.parse(fileContent);
    
    const newBlogs = blogs.filter((b: any) => b.id !== id);
    
    if (newBlogs.length === blogs.length) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(newBlogs, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
