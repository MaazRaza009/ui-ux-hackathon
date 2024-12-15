import Link from "next/link";

export default function Navbar2() {
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
                <Link href="/Product" className="hover:text-gray-900">Product</Link>
                <Link href="/Pricing" className="hover:text-gray-900">Pricing</Link>
                <Link href="/Contact" className="hover:text-gray-900">Contact</Link>
              </nav>

              {/* <!-- User Actions --> */}
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-blue-500 text-sm hover:underline">
                  Login
                </Link>
                <button type="button" className="text-sm bg-blue-400 py-2 px-4 text-white rounded hover:bg-blue-800">
                  Become a member
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Mobile Menu --> */}
        <div className="lg:hidden bg-white shadow">
          <nav className="space-y-2 py-4 px-4 text-center text-gray-600">
            <Link href="/" className="block hover:text-gray-900">Home</Link>
            <Link href="/Product" className="block hover:text-gray-900">Product</Link>
            <Link href="/Pricing" className="block hover:text-gray-900">Pricing</Link>
            <Link href="/Contact" className="block hover:text-gray-900">Contact</Link>
          </nav>
        </div>
      </div>
  );
}