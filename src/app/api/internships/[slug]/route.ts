import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    const data = await req.json();
    
    const internshipRef = doc(db, 'internships', slug);
    await updateDoc(internshipRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update internship' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    const internshipRef = doc(db, 'internships', slug);
    await deleteDoc(internshipRef);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete internship' }, { status: 500 });
  }
}
