import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const productsCol = collection(db, 'products');
    const snapshot = await getDocs(productsCol);
    let items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    return NextResponse.json({ products: items });
  } catch (error) {
    console.error("Firebase fetch error:", error);
    return NextResponse.json({ products: [] });
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
    
    await setDoc(doc(db, 'products', slug), newItem);
    
    return NextResponse.json({ success: true, product: { id: slug, ...newItem } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product item' }, { status: 500 });
  }
}
