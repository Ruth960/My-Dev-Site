import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar({ isLoggedIn, isAdmin, toggleAuth }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">MyDevSite</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600 transition">
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <button
          onClick={toggleAuth}
          className={`px-4 py-2 rounded-md ${
            isLoggedIn ? "bg-red-500 text-white" : "bg-indigo-600 text-white"
          } transition hover:bg-opacity-90`}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-3">
          <li>
            <Link
              to="/"
              className="block text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block text-gray-700 hover:text-indigo-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}