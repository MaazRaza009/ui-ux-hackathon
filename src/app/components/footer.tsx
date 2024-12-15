import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
      <div>
        <div className="bg-white shadow">
          <div className="container mx-auto px-4 bg-gray-100 pt-2 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* <!-- Logo --> */}
              <div className="text-2xl font-bold text-gray-800">
              Bandage
              </div>

              {/* <!-- User Actions --> */}
              <div className="flex items-center space-x-4">
                <Link href="#" className="text-blue-800 text-sm hover:underline">
                  <FaFacebook />
                </Link>
                <Link href="#" className="text-blue-800 text-sm hover:underline">
                  <FaInstagram />
                </Link>
                <Link href="#" className="text-blue-800 text-sm hover:underline">
                  <FaTwitter />
                </Link>
              </div>
            </div>
            <hr />
          </div>
          {/* // <!-- Footer Section --> */}
          <footer className="text-gray-800 py-8">
            <div className="container mx-auto px-4">
              <div className="grid gap-2 md:grid-cols-5">
                <div>
                  <h3 className="text-lg font-semibold">Company Info</h3>
                  <ul className="mt-4 space-y-1">
                    <li><Link href="#" className="hover:underline">About Us</Link></li>
                    <li><Link href="#" className="hover:underline">Carrier</Link></li>
                    <li><Link href="#" className="hover:underline">We're Hiring</Link></li>
                    <li><Link href="#" className="hover:underline">Blog</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Legal</h3>
                  <ul className="mt-4 space-y-1">
                    <li><Link href="#" className="hover:underline">About Us</Link></li>
                    <li><Link href="#" className="hover:underline">Carrier</Link></li>
                    <li><Link href="#" className="hover:underline">We're Hiring</Link></li>
                    <li><Link href="#" className="hover:underline">Blog</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Features</h3>
                  <ul className="mt-4 space-y-1">
                    <li><Link href="#" className="hover:underline">Business Marketing</Link></li>
                    <li><Link href="#" className="hover:underline">User Analytics</Link></li>
                    <li><Link href="#" className="hover:underline">Live Chat</Link></li>
                    <li><Link href="#" className="hover:underline">Unlimited Support</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Resources</h3>
                  <ul className="mt-4 space-y-1">
                    <li><Link href="#" className="hover:underline">IOS & Android</Link></li>
                    <li><Link href="#" className="hover:underline">Watch a Demo</Link></li>
                    <li><Link href="#" className="hover:underline">Customers</Link></li>
                    <li><Link href="#" className="hover:underline">API</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Get in Touch</h3>
                  <form className="mt-4">
                    <label className="sr-only">Email address</label>
                    <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-200 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="mt-8 text-gray-500 text-sm capitalize">
                Made with by finland all right reserved
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
