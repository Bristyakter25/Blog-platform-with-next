'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center mt-4 justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 font-bold text-3xl" href="/">
                Mindlynk
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-[18px] font-medium text-white shadow-sm"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blogs"
                      className="text-gray-500 transition hover:text-teal-500/75 text-[18px] "
                    >
                      Post Blogs
                    </Link>
                  </li>
                  <li>
                  <Link
                      href="/allBlogs"
                      className="text-gray-500 transition hover:text-teal-500/75 text-[18px] "
                    >
                      All Blogs
                    </Link>
                  </li>
                  <li>
                  <Link
                      href="/askAI"
                      className="text-gray-500 transition hover:text-teal-500/75 text-[18px] "
                    >
                     Ask AI
                    </Link>
                  </li>
                  {/* {/* <li>
                    <a className="text-gray-500 transition hover:text-teal-500/75" href="#">Projects</a>
                  </li> */}
                  <li>
                    <Link
                      href="/aboutMe"
                      className="text-gray-500 transition hover:text-teal-500/75 text-[18px] "
                    >
                     About Me
                    </Link>
                  </li> 
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {status === "loading" ? (
                  <span className="text-gray-500">Loading...</span>
                ) : session?.user ? (
                  <>
                    <span className="text-gray-700 mt-2 font-medium">{session.user.name || session.user.email}</span>
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-[18px]  font-medium text-white shadow-sm hover:bg-teal-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-[18px]  font-medium text-white shadow-sm hover:bg-teal-700"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-[18px] font-medium text-white shadow-sm hover:bg-blue-700"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
