import { NextResponse } from 'next/server';
import dbConnect, { collectionNamesObj } from '../../../lib/mongoDBConnect';

export async function POST(req) {
  try {
    const body = await req.json();
    const blogCollection = await dbConnect(collectionNamesObj.blogCollection);

    const blogToInsert = {
      ...body,
      likes: 0,
      likedBy: [],
      createdAt: new Date(),
    };

    const result = await blogCollection.insertOne(blogToInsert);

    return NextResponse.json(
      { message: "Blog added successfully!", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ message: "Failed to add blog" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const blogCollection = await dbConnect(collectionNamesObj.blogCollection);
    
  
    const blogs = await blogCollection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    const blogsWithStringId = blogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
    }));

    return NextResponse.json(blogsWithStringId, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
