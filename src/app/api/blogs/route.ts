import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'blogs.json');

export async function GET() {
  try {
    const filePath = getFilePath();
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ blogs: [] });
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(fileContent);
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const filePath = getFilePath();
    
    let blogs = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      blogs = JSON.parse(fileContent);
    }
    
    const newBlog = {
      id: Date.now().toString(),
      ...data,
      date: new Date().toISOString().split('T')[0], // yyyy-mm-dd
      createdAt: new Date().toISOString()
    };
    
    blogs.push(newBlog);
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blog: newBlog });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
