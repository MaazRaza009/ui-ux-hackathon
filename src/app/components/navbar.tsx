"use client";
import { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        {/* Main Navigation */}
        <div className="bg-white text-gray-800 py-4 px-4 shadow-md">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">Bandage</div>

            {/* Hamburger Menu (Mobile View) */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none lg:hidden"
            >
              <CiMenuFries className="w-6 h-6" />
            </button>

            {/* Navigation Links */}
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-sm mt-4 lg:mt-0`}
            >
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="hover:text-blue-600 flex items-center space-x-1"
                >
                  <span>Shop-1</span>
                  <RiArrowDropDownLine className="h-4 w-4" />
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-40">
                  <a
                    href="/shop"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Shop-1
                  </a>
                  <a
                    href="/Shop-2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Shop-2
                  </a>
                </div>
              </div>
              <a href="/about" className="hover:text-blue-600">
                About
              </a>
              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
              <a href="/pages" className="hover:text-blue-600">
                Pages
              </a>
            </nav>

            {/* Right Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#" className="text-blue-600 flex items-center space-x-1">
                <IoMdLogIn className="w-5 h-5" />
                <span>Login / Register</span>
              </a>
              <IoSearchSharp className="w-5 h-5" />
              <HiOutlineShoppingCart className="w-5 h-5" />
              <FaRegHeart className="h-5 w-5" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col space-y-4 mt-4 lg:hidden">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Login / Register
              </a>
              <IoSearchSharp className="w-5 h-5 mx-auto" />
              <HiOutlineShoppingCart className="w-5 h-5 mx-auto" />
              <FaRegHeart className="h-5 w-5 mx-auto" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
