import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

import localBlogs from '@/data/blogs.json';

export async function GET() {
  try {
    const blogsCol = collection(db, 'blogs');
    const blogSnapshot = await getDocs(blogsCol);
    let blogs = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Fallback to local data if firestore is empty
    if (blogs.length === 0) {
      blogs = localBlogs;
    }
    
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Firebase fetch error:", error);
    // Fallback to local JSON on error
    return NextResponse.json({ blogs: localBlogs });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create SEO-friendly slug from title (e.g. "My New Blog" -> "my-new-blog")
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const newBlog = {
      ...data,
      slug,
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };
    
    // Save to Firestore with slug as document ID (This helps SEO directly in the URL)
    await setDoc(doc(db, 'blogs', slug), newBlog);
    
    return NextResponse.json({ success: true, blog: { id: slug, ...newBlog } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
