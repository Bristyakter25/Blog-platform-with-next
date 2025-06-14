import React from 'react'

export default function Newsletter() {
  return (
    <div><section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16 px-6">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
      📬 Stay in the Loop
    </h2>
    <p className="text-gray-600 text-lg mb-8">
      Subscribe to get the latest web development tips, project guides, and frontend insights from Bristy straight to your inbox.
    </p>

    <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-80 px-5 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:outline-none transition duration-300 shadow-sm"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-xl transition duration-300"
      >
        Subscribe
      </button>
    </form>

    <p className="text-sm text-gray-500 mt-4">
      No spam ever. Unsubscribe anytime.
    </p>
  </div>
</section>
</div>
  )
}
