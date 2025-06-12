'use client';

import { useEffect, useState } from 'react';

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6">📚 Latest Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                <img src={blog.image} alt="" />
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">Category: {blog.category}</p>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
              <p className="mt-2 text-sm text-blue-500">Author: {blog.author}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
