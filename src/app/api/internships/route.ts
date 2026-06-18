import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const internshipsCol = collection(db, 'internships');
    const internshipSnapshot = await getDocs(internshipsCol);
    const internships = internshipSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json({ internships });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch internships' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create SEO-friendly slug from title
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const newInternship = {
      ...data,
      slug,
      createdAt: new Date().toISOString()
    };
    
    // Save to Firestore with slug as document ID
    await setDoc(doc(db, 'internships', slug), newInternship);
    
    return NextResponse.json({ success: true, internship: { id: slug, ...newInternship } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create internship' }, { status: 500 });
  }
}
