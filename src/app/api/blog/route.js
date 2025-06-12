"use server";

import { NextResponse } from 'next/server';
import dbConnect, { collectionNamesObj } from '../../../lib/mongoDBConnect';

export async function POST(req) {
  try {
    const body = await req.json();
    const blogCollection = dbConnect(collectionNamesObj.blogCollection);
    const result = await blogCollection.insertOne(body);

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
    const blogCollection = dbConnect(collectionNamesObj.blogCollection);
    const blogs = await blogCollection.find().sort({ _id: -1 }).toArray(); // latest first
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
  }
}
