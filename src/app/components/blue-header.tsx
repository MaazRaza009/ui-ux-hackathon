import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

export default function BlueHeader(){
    return(
        <div>
          <div className="bg-gray-900 text-white py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
              {/* <!-- Contact Information --> */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BsTelephone className="h-5 w-5" />
                  <span className="text-sm">(225) 555-0118</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TfiEmail className="h-5 w-5" />
                  <span className="text-sm">michelle.rivera@example.com</span>
                </div>
              </div>
              {/* <!-- Promotional Message --> */}
              <div className="text-center hidden md:block">
                <span className="bg-gray-800 px-4 py-1 rounded text-sm">
                  Follow Us and get a chance to win 80% off
                </span>
              </div>
              {/* <!-- Social Media Links --> */}
              <div className="flex items-center space-x-4">
                <span className="hidden md:block">Follow Us:</span>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FaYoutube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}