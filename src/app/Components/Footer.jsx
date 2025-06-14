export default function Footer() {
  return (
    <footer className="bg-gray-400  text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

          {/* Logo and description */}
          <div className="md:w-1/3 mr-18">
            <h2 className="text-3xl font-bold text-teal-400 mb-2">MindLynk</h2>
            <p className="text-white max-w-sm">
              Connecting your ideas and creativity with technology.
              Your go-to platform for everything web and beyond.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="md:w-1/3 mr-28 flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 text-white">
            <a href="#home" className="hover:text-teal-400 transition">Home</a>
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#services" className="hover:text-teal-400 transition">Services</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </nav>

          {/* Social Media */}
          <div className="md:w-1/3 flex space-x-6">
            <a
              href="https://twitter.com/mindlynk"
              aria-label="Twitter"
              className="hover:text-teal-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6 0-.2 0-.4 0-.6A8.3 8.3 0 0 0 21 4.5a8.2 8.2 0 0 1-2.4.7 4.1 4.1 0 0 0 1.8-2.3 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7 11.6 11.6 0 0 1-8.4-4.3 4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 3 17.6a11.6 11.6 0 0 0 5 1.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/mindlynk"
              aria-label="LinkedIn"
              className="hover:text-teal-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm.02 4.75H2v12.5h3V8.25zm7.5 0h-3v12.5h3v-6.5c0-2.55 3-2.75 3 0v6.5h3v-7.75c0-6-6.75-5.75-6-2.75z"/>
              </svg>
            </a>
            <a
              href="https://github.com/mindlynk"
              aria-label="GitHub"
              className="hover:text-teal-400 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 0 0 6.84 9.5c.5.1.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.6.07-.59.07-.59 1 .07 1.54 1.03 1.54 1.03.9 1.53 2.35 1.1 2.92.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.1-4.56-4.88 0-1.08.38-1.96 1-2.66-.1-.26-.43-1.3.1-2.7 0 0 .83-.27 2.75 1a9.58 9.58 0 0 1 5 0c1.9-1.27 2.72-1 2.72-1 .54 1.4.2 2.44.1 2.7.63.7 1 1.58 1 2.66 0 3.8-2.34 4.62-4.58 4.87.36.3.68.9.68 1.82v2.7c0 .26.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-100 text-sm">
          &copy; {new Date().getFullYear()} MindLynk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
