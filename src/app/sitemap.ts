import { MetadataRoute } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gen-z-neural-x.vercel.app';

  // Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/internships`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/certifications`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/refund-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/learn/final-year-project`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    // Fetch all dynamic content parallelly
    const [coursesSnap, blogsSnap, internshipsSnap] = await Promise.all([
      getDocs(collection(db, 'courses')),
      getDocs(collection(db, 'blogs')),
      getDocs(collection(db, 'internships'))
    ]);

    const courseRoutes = coursesSnap.docs.map((doc) => ({
      url: `${baseUrl}/courses/${doc.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    const blogRoutes = blogsSnap.docs.map((doc) => ({
      url: `${baseUrl}/blog/${doc.id}`,
      lastModified: doc.data().updatedAt ? new Date(doc.data().updatedAt) : new Date(doc.data().createdAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    const internshipRoutes = internshipsSnap.docs.map((doc) => ({
      url: `${baseUrl}/internships/${doc.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    dynamicRoutes = [...courseRoutes, ...blogRoutes, ...internshipRoutes];
  } catch (error) {
    console.error('Error fetching dynamic routes for sitemap:', error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
