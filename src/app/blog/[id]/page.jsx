// app/blog/[id]/page.jsx
import { notFound } from 'next/navigation';
import { getBlogById } from '../../../lib/blog';
import BlogDetailClient from './BlogDetailClient';

export default async function Page({ params }) {
  const blog = await getBlogById(params.id);
  if (!blog) return notFound();

  // Convert _id to string if needed
  blog._id = blog._id.toString();

  return (
    <div className="p-8 mt-20 max-w-4xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl mt-5 font-bold mb-2">{blog.title}</h1>
      <p className="text-md text-gray-500 mb-4">
        By {blog.author} <span className='mx-3'>|</span> Category: {blog.category}
      </p>
      <p className="mb-8">{blog.content}</p>

      {/* Client component for like feature */}
      <BlogDetailClient blog={blog} />
    </div>
  );
}
