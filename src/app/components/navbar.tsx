import Link from "next/link";

import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";

export default function Navbar() {
  return(
    <div>
      {/* <!-- Navbar --> */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* <!-- Logo --> */}
            <div className="text-2xl font-bold text-gray-800">
              Bandage
            </div>
            {/* <!-- Navigation Menu --> */}
            <nav className="hidden lg:flex space-x-6 text-gray-600 text-sm">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <Link href="/shop" className="hover:text-gray-900">Shop</Link>

              <Link href="/About" className="hover:text-gray-900">About</Link>
              <Link href="/Blog" className="hover:text-gray-900">Blog</Link>
              <Link href="/Contact" className="hover:text-gray-900">Contact</Link>
              <Link href="/Blog" className="hover:text-gray-900">Pages</Link>
            </nav>
            {/* <!-- User Actions --> */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-blue-500 text-sm hover:underline">
                Login / Register
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <IoSearchSharp className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <HiOutlineShoppingCart className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <FaRegHeart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Mobile Menu --> */}
      <div className="lg:hidden bg-white shadow">
        <nav className="space-y-2 text-center py-4 px-4 text-gray-600">
          <Link href="/" className="block hover:text-gray-900">Home</Link>
          <Link href="/shop" className="block hover:text-gray-900">Shop</Link>
          <Link href="/About" className="block hover:text-gray-900">About</Link>
          <Link href="/Blog" className="block hover:text-gray-900">Blog</Link>
          <Link href="/Contact" className="block hover:text-gray-900">Contact</Link>
          <Link href="/Blog" className="block hover:text-gray-900">Pages</Link>
        </nav>
      </div>
    </div>
  );
}
