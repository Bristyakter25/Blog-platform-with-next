'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PopularBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blog/popular');
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="p-6 mx-20 mt-10">
      <h2 className="text-3xl font-bold mb-6">📚 Popular Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {blogs.slice(0, 6).map((blog) => (
    <Link key={blog._id} href={`/blog/${blog._id}`}>
    <div className="cursor-pointer border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
      <img className='h-[250px] rounded-2xl w-full' src={blog.image} alt="" />
      <div className='py-4 px-3'>
        <button className='border hover:bg-black hover:text-white rounded-4xl w-[150px]'>{blog.category}</button>
        <h3 className="text-xl h-[70px] mt-4 font-semibold">{blog.title}</h3>
        <p className='text-gray-400'>{blog.publishedDate} by <span className='text-black font-bold'>{blog.author}</span></p>
        <p className="text-gray-600 flex items-center gap-2 mt-2">
  <span className="text-red-400 text-2xl">❤️</span>
  <span className="text-black font-bold text-xl">{blog.likes}</span>
  <span className="text-gray-500">people liked this</span>
</p>

      </div>
    </div>
  </Link>
  ))}
</div>

      )}
    </section>
  );
}
