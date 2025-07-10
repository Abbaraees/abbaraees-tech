import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#B36A10]">
          <Link to="/" onClick={closeMenu}>
            My Portfolio
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Sliding Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-3/4  text-white shadow-lg transform ${
            isOpen ? "translate-x-0 bg-gray-800" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:space-x-6`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0">
            <Link
              to="/"
              className="hover:text-[#B36A10] text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="hover:text-[#B36A10] text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="hover:text-[#B36A10] text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="hover:text-[#B36A10] text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#B36A10] text-lg font-medium transition-colors duration-300"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}