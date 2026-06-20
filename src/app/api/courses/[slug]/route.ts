import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const docRef = doc(db, 'courses', slug);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    return NextResponse.json({ course: { id: docSnap.id, ...docSnap.data() } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    await deleteDoc(doc(db, 'courses', slug));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const data = await req.json();
    await setDoc(doc(db, 'courses', slug), { ...data, updatedAt: new Date().toISOString() }, { merge: true });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('PUT course error:', error);
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}
