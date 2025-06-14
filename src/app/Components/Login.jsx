'use client';

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        router.push("/"); // Redirect to homepage
      }, 1600); // Wait for Swal to finish
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Invalid email or password',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Here!</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
