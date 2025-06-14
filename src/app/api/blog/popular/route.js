import { NextResponse } from 'next/server';
import dbConnect, { collectionNamesObj } from '../../../../lib/mongoDBConnect';


export async function GET() {
  try {
    const blogCollection = await dbConnect(collectionNamesObj.blogCollection);

    const popularBlogs = await blogCollection
      .find()
      .sort({ likes: -1 }) // Sort by most likes
      .limit(6)            // Limit to 6 posts
      .toArray();

    const withStringId = popularBlogs.map(blog => ({
      ...blog,
      _id: blog._id.toString()
    }));

    return NextResponse.json(withStringId, { status: 200 });
  } catch (err) {
    console.error('Error fetching popular blogs:', err);
    return NextResponse.json({ error: 'Failed to fetch popular blogs' }, { status: 500 });
  }
}
