
import Image from "next/image";
import fb from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import twitter from "@/images/twitter.png"
export default function Footer() {
    return (
        // <!-- Footer Section -->
  <footer className="bg-gray-900 text-gray-200 py-8">
    <div className="container mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Company Info</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Carrier</a></li>
            <li><a href="#" className="hover:underline">We're Hiring</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Business Marketing</a></li>
            <li><a href="#" className="hover:underline">User Analytics</a></li>
            <li><a href="#" className="hover:underline">Live Chat</a></li>
            <li><a href="#" className="hover:underline">Unlimited Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <form className="mt-4">
            <label className="sr-only">Email address</label>
            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        Made with love by Bandage © All rights reserved.
      </div>
    </div>
  </footer>

    );
  }
