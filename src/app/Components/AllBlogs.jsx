'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function LatestBlogs() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email || null;

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

  const handleLike = async (blogId) => {
    if (!userEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You must be logged in to like a blog.',
      });
      return;
    }

    const blogToLike = blogs.find(blog => blog._id === blogId);
    if (blogToLike?.likedBy?.includes(userEmail)) {
      Swal.fire({
        icon: 'error',
        title: 'Already Liked',
        text: 'You have already liked this blog.',
      });
      return;
    }

    // Optimistic UI update
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog._id === blogId
          ? {
              ...blog,
              likes: (blog.likes || 0) + 1,
              likedBy: [...(blog.likedBy || []), userEmail],
            }
          : blog
      )
    );

    try {
      const res = await fetch('/api/blog/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId, userEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Rollback on error
        setBlogs(prevBlogs =>
          prevBlogs.map(blog =>
            blog._id === blogId
              ? {
                  ...blog,
                  likes: blog.likes - 1,
                  likedBy: blog.likedBy.filter(email => email !== userEmail),
                }
              : blog
          )
        );
        console.error("Failed to update likes:", data.error);
      } else if (data.blog) {
        // Sync state with backend response
        setBlogs(prevBlogs =>
          prevBlogs.map(blog =>
            blog._id === blogId ? { ...blog, ...data.blog } : blog
          )
        );
      }
    } catch (err) {
      setBlogs(prevBlogs =>
        prevBlogs.map(blog =>
          blog._id === blogId
            ? {
                ...blog,
                likes: blog.likes - 1,
                likedBy: blog.likedBy.filter(email => email !== userEmail),
              }
            : blog
        )
      );
      console.error('Failed to like blog:', err);
    }
  };

  if (status === 'loading') {
    return <p>Loading session...</p>;
  }

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="grid mx-36 gap-6 md:grid-cols-2 sm:grid-cols-1 ">
          {blogs.map((blog) => {
            const liked = blog.likedBy?.includes(userEmail);
            return (
              <div key={blog._id} className="border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
                <Link href={`/blog/${blog._id}`}>
                  <img className="h-[270px] rounded-2xl w-full" src={blog.image} alt={blog.title} />
                </Link>

                <div className="py-4 px-3">
                  <button className="border hover:bg-black hover:text-white rounded-4xl w-[150px]">
                    {blog.category}
                  </button>
                  <h3 className="text-xl h-[60px] mt-4 font-semibold">
                    <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-400">
                    {blog.publishedDate} by <span className="text-black font-bold">{blog.author}</span>
                  </p>
                  <div className="flex items-center mt-2 gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleLike(blog._id);
                      }}
                      className="focus:outline-none"
                      aria-label={liked ? 'Unlike blog' : 'Like blog'}
                      disabled={liked}
                    >
                      <img
                        width="40"
                        height="40"
                        src={
                          liked
                            ? 'https://img.icons8.com/ios-filled/50/ff0000/facebook-like--v1.png'
                            : 'https://img.icons8.com/ios/50/facebook-like--v1.png'
                        }
                        alt={liked ? 'Liked' : 'Not liked'}
                      />
                    </button>
                    <span>{blog.likes || 0} Likes</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
