// lib/blog.js
import { ObjectId } from 'mongodb';
import dbConnect, { collectionNamesObj } from './mongoDBConnect';

export async function getAllBlogs() {
  const blogCollection = await dbConnect(collectionNamesObj.blogCollection);
  return await blogCollection.find().sort({ _id: -1 }).toArray();
}

export async function getBlogById(id) {
  const blogCollection = await dbConnect(collectionNamesObj.blogCollection);
  return await blogCollection.findOne({ _id: new ObjectId(id) });
}
