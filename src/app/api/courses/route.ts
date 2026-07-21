import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import localCourses from '@/data/courses.json';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, 'courses'));
    let courses = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    if (courses.length === 0) {
      courses = localCourses;
    }
    return NextResponse.json({ courses });
  } catch (error) {
    console.error("Firebase fetch error:", error);
    return NextResponse.json({ courses: localCourses });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const newCourse = { ...data, slug, createdAt: new Date().toISOString() };
    await setDoc(doc(db, 'courses', slug), newCourse);
    return NextResponse.json({ success: true, course: { id: slug, ...newCourse } });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}
