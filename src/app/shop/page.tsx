import Image from "next/image";
import GreenHeader from "../components/greenheader";
import Navbar from "../components/navbar";
// import CardText from "../components/cards-text";

import arrow from "@/images/arrow.png";
import cat1 from "@/images/card-item-1.png";
import cat2 from "@/images/card-item-2.png";
import cat3 from "@/images/card-item-3.png";
import cat4 from "@/images/card-item-4.png";
import cat5 from "@/images/card-item-5.png";
import frame from "@/images/Frame 31.png";
import drop from "@/images/DropDown.png";
import fab1 from "@/images/fa-brands-1.png";
import fab2 from "@/images/fa-brands-2.png";
import fab3 from "@/images/fa-brands-3.png";
import fab4 from "@/images/fa-brands-4.png";
import fab5 from "@/images/fa-brands-5.png";
import fab6 from "@/images/fa-brands-6.png";
import clients from "@/images/desktop-clients-1.png";
import fb from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import twitter from "@/images/twitter.png";

import pic1 from "@/images/product-cover-1.png";
import pic2 from "@/images/product-cover-2.png";
import pic3 from "@/images/product-cover-3.png";
import pic4 from "@/images/product-cover-4.png";
import pic5 from "@/images/product-cover-5.png";
import pic6 from "@/images/product-cover-6.png";
import pic7 from "@/images/product-cover-7.png";
import pic8 from "@/images/product-cover-8.png";
import pic9 from "@/images/product-cover-9.png";
import pic10 from "@/images/product-cover-10.png";
import pic11 from "@/images/product-cover-11.png";
import pic12 from "@/images/product-cover-12.png";

export default function Home() {
  return (
    <div>
      <GreenHeader />
      <Navbar />

      {/* Shop Section */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
        <div className="flex justify-center items-center gap-4 mt-2">
          <span className="font-bold text-sm text-[#252B42]">Home</span>
          <Image src={arrow} alt="arrow" width={8} height={6} />
          <span className="font-bold text-sm text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#FAFAFA] py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {[cat1, cat2, cat3, cat4, cat5].map((cat, index) => (
            <Image key={index} src={cat} alt={`category ${index}`} />
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="my-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-[#737373]">
            Showing all 12 results
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <h6 className="font-bold text-sm text-[#737373]">Views:</h6>
              <Image src={frame} alt="frame" />
            </div>

            <button className="px-6 py-2 border border-[#DDDDDD]">
              <span className="text-sm font-bold text-[#737373]">Popularity</span>
              <Image src={drop} alt="drop" />
            </button>

            <button className="bg-[#23A6F0] text-white px-6 py-2 font-bold">
              Filter
            </button>
          </div>
        </div>

        <div className="bg-gray-100 py-8">
  <div className="container mx-auto flex flex-wrap justify-center gap-6 items-center">
    <Image src={fab1} alt="Hooli" width={150} height={150} className="h-20" />
    <Image src={fab2} alt="Lyft" width={150} height={150} className="h-20" />
    <Image src={fab3} alt="Leaf" width={150} height={150} className="h-20" />
    <Image src={fab4} alt="Stripe" width={150} height={150} className="h-20" />
    <Image src={fab5} alt="AWS" width={150} height={150} className="h-20" />
    <Image src={fab6} alt="Reddit" width={150} height={150} className="h-20" />
  </div>
</div>
{/* Footer */}
<footer className="bg-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold">Company Info</h2>
            <ul className="mt-3 space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Legal</h2>
            <ul className="mt-3 space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Features</h2>
            <ul className="mt-3 space-y-1">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="mt-3 space-y-1">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <button className="bg-[#23A6F0] text-white px-6 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 pb-6 pl-3 bg-gray-300 text-sm">
          <p>Made with love By Finland All Right Reserved</p>
        </div>
      </footer>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12].map((pic, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={pic} alt={`product ${index}`} />
              <div className="p-4">
        <h2 className="text-lg font-bold text-blue-900">Graphic Design</h2>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-600 font-bold">$6.48</span>
        </div>
        <div className="flex space-x-2 mt-4">
          <span className="w-4 h-4 bg-blue-500 rounded-full border border-gray-200"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full border border-gray-200"></span>
          <span className="w-4 h-4 bg-orange-500 rounded-full border border-gray-200"></span>
          <span className="w-4 h-4 bg-black rounded-full border border-gray-200"></span>
        </div>
      </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 bg-white py-4 rounded-lg border border-gray-300 shadow-sm max-w-md mx-auto">
  {/* <!-- First Button --> */}
  <button
    className="px-4 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200"
    disabled
  >
    First
  </button>

  {/* <!-- Page Numbers --> */}
  <button className="px-4 py-2 text-blue-500 border border-gray-300 bg-white hover:bg-gray-100">
    1
  </button>
  <button className="px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-md">
    2
  </button>
  <button className="px-4 py-2 text-blue-500 border border-gray-300 bg-white hover:bg-gray-100">
    3
  </button>

  {/* <!-- Next Button --> */}
  <button
    className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100"
  >
    Next
  </button>
</div>

      
    </div>
  );
}
