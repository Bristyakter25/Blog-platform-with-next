import { NextResponse } from "next/server";
// import dbConnect, { collectionNamesObj } from "../../../../lib/mongoDBConnect";
import { ObjectId } from "mongodb";
import dbConnect, { collectionNamesObj } from "../../../../lib/mongoDBConnect";

export async function POST(req) {
  try {
    const { blogId, userEmail } = await req.json();

    if (!userEmail) {
      return NextResponse.json({ error: "User email required" }, { status: 401 });
    }

    if (!blogId || !ObjectId.isValid(blogId)) {
      return NextResponse.json({ error: "Invalid or missing blogId" }, { status: 400 });
    }

    const userCollection = await dbConnect(collectionNamesObj.userCollection);
    const user = await userCollection.findOne({ email: userEmail });

    if (!user) {
      return NextResponse.json({ error: "User not found or unauthorized" }, { status: 401 });
    }

    const blogCollection = await dbConnect(collectionNamesObj.blogCollection);
    const blog = await blogCollection.findOne({ _id: new ObjectId(blogId) });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    if (blog.likedBy?.includes(user.email.toString())) {
      return NextResponse.json({ error: "Already liked" }, { status: 400 });
    }

    const result = await blogCollection.findOneAndUpdate(
      { _id: new ObjectId(blogId) },
      {
        $inc: { likes: 1 },
        $push: { likedBy: user.email.toString() },
      },
      { returnDocument: "after" }
    );

    return NextResponse.json({ blog: result.value }, { status: 200 });
  } catch (error) {
    console.error("Error updating likes:", error);
    return NextResponse.json({ error: "Failed to update likes" }, { status: 500 });
  }
}
