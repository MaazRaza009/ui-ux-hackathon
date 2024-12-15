import Image from "next/image";
import p1 from "@/images/single-product-1-cover-2.jpg";
import p2 from "@/images/single-product-1-thumb-1.jpg";
import p3 from "@/images/single-product-1-thumb-2.jpg";
import Jumps from "@/images/unsplash.png";
import product1 from "@/images/selling-products-1.png";
import product2 from "@/images/selling-products-2.png";
import product3 from "@/images/selling-products-3.png";
import product4 from "@/images/selling-products-4.png";
import product5 from "@/images/selling-products-5.png";
import product6 from "@/images/selling-products-6.png";
import fab1 from "@/images/fa-brands-1.png";
import fab2 from "@/images/fa-brands-2.png";
import fab3 from "@/images/fa-brands-3.png";
import fab4 from "@/images/fa-brands-4.png";
import fab5 from "@/images/fa-brands-5.png";
import fab6 from "@/images/fa-brands-6.png";

import GreenHeader from "../components/greenheader";
import Navbar from "../components/navbar";

// Icons
import { MdOutlineStar } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Footer from "../components/footer";
import Link from "next/link";

export default function Blog(){
    return(
        <div>
          <GreenHeader />
          <Navbar />
          <div className="bg-gray-100 p-6">
            <div className="container mx-auto max-w-4xl bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Left Section: Image & Carousel --> */}
                <div className="p-4">
                  <div className="relative">
                    <Image 
                      src={p1}
                      width={500}
                      height={500}
                      alt="Product Image" 
                      className="w-full h-72 object-cover rounded-lg" 
                    />
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                      <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                        <MdOutlineArrowBackIos className="w-5 h-5" />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                        <MdOutlineArrowForwardIos className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-4 gap-2">
                    <Image 
                      src={p2}
                      width={80} 
                      height={80}
                      alt="Thumbnail" 
                      className="w-16 h-16 object-cover border rounded-lg cursor-pointer" 
                    />

                    <Image 
                      src={p3}
                      width={80}
                      height={80}
                      alt="Thumbnail" 
                      className="w-16 h-16 object-cover border rounded-lg cursor-pointer" 
                    />
                    </div>
                  </div>

                  {/* <!-- Right Section: Product Details --> */}
                  <div className="p-4">
                    <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        <MdOutlineStar className="w-5 h-5 text-yellow-400" />
                        <MdOutlineStar className="w-5 h-5 text-yellow-400" />
                        <MdOutlineStar className="w-5 h-5 text-yellow-400" />
                        <MdOutlineStar className="w-5 h-5 text-yellow-400" />
                        <CiStar className="w-5 h-5 text-yellow-400" />
                      </div>
                      <span className="text-gray-600 text-sm">(10 Reviews)</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mt-4">$1,139.33</p>
                    <p className="text-green-500 font-medium mt-2">In Stock</p>
                    <p className="text-gray-600 mt-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                    <hr className="w-full h-5 text-gray-800 mt-5" />
                    <div className="flex items-center gap-2 mt-6">
                      <div className="w-6 h-6 rounded-full bg-teal-500 border cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-green-500 border cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 border cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-black border cursor-pointer"></div>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Select Options</button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <HiOutlineShoppingCart className="w-6 h-6" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <FaRegHeart className="h-6 w-6" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <FaEye className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6">
              <div className="container mx-auto max-w-5xl bg-white shadow-md rounded-lg p-4">
                {/* <!-- Tabs --> */}
                <div className="border-b">
                  <nav className="flex space-x-4">
                    <Link href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">Description</Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-600 pb-2">Additional Information</Link>
                    <Link href="#" className="text-gray-600 hover:text-blue-600 pb-2">Reviews (0)</Link>
                  </nav>
                </div>

                {/* <!-- Content Section --> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
                  {/* <!-- Left Column --> */}
                  <div className="lg:col-span-1">
                    <Image 
                    src={Jumps}
                    width={400}
                    height={300}
                    alt="Decorative" 
                    className="rounded-lg" 
                  />
                  </div>

                  {/* <!-- Middle Column --> */}
                  <div className="lg:col-span-1">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">the quick fox jumps over</h2>
                    <p className="text-gray-600 mb-4">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>

                  {/* <!-- Right Column --> */}
                  <div className="lg:col-span-1">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">the quick fox jumps over</h2>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                    </ul>
                    <h2 className="text-lg font-bold text-gray-800 mt-8 mb-4">the quick fox jumps over</h2>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <span className="mr-2">&gt;</span>
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Grid */}
            <div className="container mx-auto p-4 mt-10">
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                BESTSELLER PRODUCTS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {[product1, product2, product3, product4, product5, product6, product3, product4].map((pic, index) => (
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
              <div className="bg-gray-100 py-8 mb-8 mt-8">
                <div className="container mx-auto flex flex-wrap justify-center gap-6 items-center">
                  <Image src={fab1} alt="Hooli" width={150} height={150} />
                  <Image src={fab2} alt="Lyft" width={150} height={150} />
                  <Image src={fab3} alt="Leaf" width={150} height={150} />
                  <Image src={fab4} alt="Stripe" width={150} height={150} />
                  <Image src={fab5} alt="AWS" width={150} height={150} />
                  <Image src={fab6} alt="Reddit" width={150} height={150} />
                </div>
              </div>
            </div>
          <Footer />
        </div>
    )
}