'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function AddBlogs() {

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    image: '',
    content: '',
    publishedDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Add likes: 0 here
    const blogDataWithLikes = { ...formData, likes: 0 };
  
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogDataWithLikes),
    });
  
    if (res.ok) {
      Swal.fire('Success', 'Blog posted successfully!', 'success');
      setFormData({
        title: '',
        category: '',
        author: '',
        image: '',
        content: '',
        publishedDate: '',
      });
    } else {
      Swal.fire('Error', 'Something went wrong!', 'error');
    }
  };
  

  return (
   <div className='mt-10 mb-10'>
    <h1 className='text-center font-bold text-2xl'>Post Your Blogs!</h1>
     <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded space-y-4">
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full border p-2 rounded" />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required className="w-full border p-2 rounded" />
      <input name="publishedDate" type="date" value={formData.publishedDate} onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition">Submit Blog</button>
    </form>
   </div>
  );
}
