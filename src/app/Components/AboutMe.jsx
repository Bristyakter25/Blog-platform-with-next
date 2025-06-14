"use client";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6 ">
      <p className="text-lg font-semibold text-gray-700 mb-4">About Me</p>
      <header className="mb-8 lg:w-[1000px] w-[350px]">
        <h1 className="lg:text-3xl text-xl font-normal text-center  text-gray-700">
          Hi, I’m <span className="text-gray-900 font-bold">Bristy Akter</span> — a hardworking web developer and passionate motivator.  
          I build sleek, functional websites and love inspiring others to push their limits.
        </h1>
        <div className="flex justify-center space-x-6 mt-6 text-gray-600">
          <a
            href="https://facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            {/* Facebook SVG */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900"
          >
            {/* GitHub SVG */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.82-.261.82-.58 0-.287-.011-1.243-.017-2.446-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.019.005 2.045.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.37.813 1.096.813 2.21 0 1.595-.015 2.879-.015 3.27 0 .321.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            {/* LinkedIn SVG */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.135 1.445-2.135 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.925-2.068-2.066 0-1.142.924-2.067 2.068-2.067 1.143 0 2.067.925 2.067 2.067 0 1.141-.924 2.066-2.067 2.066zM6.833 20.452H3.84V9h2.993v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.771 24h20.451C23.204 24 24 23.227 24 22.273V1.727C24 .774 23.204 0 22.225 0z" />
            </svg>
          </a>
        </div>
        <button className="mt-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
          Get in Touch
        </button>
      </header>

      <div className="mb-10 text-xl font-semibold text-gray-800">Bristy Akter</div>

      <div className="flex justify-center space-x-6 flex-wrap max-w-5xl">
  {/* Card 1 */}
  <div className="flex flex-col items-center bg-gray-100 p-6 rounded-full w-40 h-40 transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-400">
    <div className="text-3xl font-bold text-teal-600">4.8/5</div>
    <p className="text-sm mt-2 text-gray-600 text-center">Star Rating on Goodfirms</p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center bg-gray-100 p-6 rounded-full w-40 h-40 transform hover:shadow-teal-400 transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div className="text-3xl font-bold text-teal-600">20+</div>
    <p className="text-sm mt-2 text-gray-600 text-center">Skills Mastered (JS, React, Node.js...)</p>
  </div>

  {/* Image */}
  <div className="flex flex-col items-center w-40 h-40 rounded-full overflow-hidden hover:shadow-blue-400 transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <img
      src="/bannerImages/watercolor-1020509_1280.jpg"
      alt="Bristy Akter"
      className="w-full h-full object-cover rounded-full border-4 border-teal-600"
    />
  </div>
  
  {/* Card 3 */}
  <div className="flex flex-col items-center bg-gray-100 p-6 rounded-full w-40 h-40 transform hover:shadow-teal-400 transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div className="text-3xl font-bold text-teal-600">2+</div>
    <p className="text-sm mt-2 text-gray-600 text-center">Years Experience in Web Development</p>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center bg-gray-100 p-8 rounded-full w-40 h-40 transform hover:shadow-teal-400 transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
    <div className="text-3xl font-bold text-teal-600">100%</div>
    <p className="text-sm mt-2 text-gray-600 text-center">Hardworking & Motivated</p>
  </div>
</div>

    </div>
  );
}
