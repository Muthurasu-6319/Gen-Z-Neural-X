import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const portfolioCol = collection(db, 'portfolio');
    const snapshot = await getDocs(portfolioCol);
    let items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    return NextResponse.json({ portfolio: items });
  } catch (error) {
    console.error("Firebase fetch error:", error);
    return NextResponse.json({ portfolio: [] });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create SEO-friendly slug from title
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const newItem = {
      ...data,
      slug,
      createdAt: new Date().toISOString()
    };
    
    await setDoc(doc(db, 'portfolio', slug), newItem);
    
    return NextResponse.json({ success: true, portfolio: { id: slug, ...newItem } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create portfolio item' }, { status: 500 });
  }
}
