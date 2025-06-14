'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function BlogDetailClient({ blog }) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const [likes, setLikes] = useState(blog.likes || 0);
  const [likedBy, setLikedBy] = useState(blog.likedBy || []);

  const alreadyLiked = likedBy.includes(userEmail);

  const handleLike = async () => {
    if (!userEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You must be logged in to like this blog.',
      });
      return;
    }

    if (alreadyLiked) {
      Swal.fire({
        icon: 'error',
        title: 'Already Liked',
        text: 'You have already liked this blog.',
      });
      return;
    }

    try {
      setLikes((prev) => prev + 1);
      setLikedBy((prev) => [...prev, userEmail]);

      const res = await fetch('/api/blog/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId: blog._id, userEmail }),
      });

      const data = await res.json();
      if (!res.ok) {
        setLikes((prev) => prev - 1);
        setLikedBy((prev) => prev.filter(email => email !== userEmail));
        throw new Error(data.error || 'Like failed');
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="flex items-center gap-3 mt-6">
      <button
        onClick={handleLike}
        disabled={alreadyLiked}
        aria-label="Like Blog"
        className="focus:outline-none"
      >
        <img
          width="40"
          height="40"
          src={
            alreadyLiked
              ? 'https://img.icons8.com/ios-filled/50/ff0000/facebook-like--v1.png'
              : 'https://img.icons8.com/ios/50/facebook-like--v1.png'
          }
          alt="Like icon"
        />
      </button>
      <p className="text-gray-600">
        <span className="font-bold text-lg text-black">{likes}</span> people liked this
      </p>
    </div>
  );
}
