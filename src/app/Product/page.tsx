import Link from "next/link";
import Image from "next/image";
import p1 from "@/images/product-1.png";
import p2 from "@/images/product-2.png";
import p3 from "@/images/product-3.png";
import p4 from "@/images/product-4.png";
import p5 from "@/images/product-5.png";
import t1 from "@/images/team-1.jpg";
import t2 from "@/images/team-2.jpg";
import t3 from "@/images/team-3.jpg";
import t4 from "@/images/team-4.jpg";
import t5 from "@/images/team-5.jpg";
import t6 from "@/images/team-6.jpg";
import t7 from "@/images/team-7.jpg";
import t8 from "@/images/team-8.jpg";
import t9 from "@/images/team-9.jpg";


import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";

export default function Product() {
    return(
        <div>
            <Navbar2 />
            {/* <!-- Innovation Section --> */}
            <div className="bg-gray-50 py-16 px-6">
                {/* <!-- Header --> */}
                <div className="text-center mb-8">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase">What We Do</h3>
                    <h1 className="text-4xl font-bold text-gray-800">Innovation tailored for you</h1>
                    <nav className="text-sm text-gray-500 mt-4">
                        <Link href="/" className="hover:text-gray-800">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="#" className="hover:text-gray-800">Team</Link>
                    </nav>
                </div>

                {/* <!-- Gallery --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* <!-- Large Image --> */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <Image 
                            src={p1} 
                            alt="Fashion Model" 
                            className="w-full h-full object-cover rounded-lg shadow-md" 
                        />
                    </div>

                    {/* <!-- Small Images --> */}
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={p2} alt="Eco-aware coat" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <Image src={p3} alt="Denim Jacket" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <Image src={p4} alt="Black Sweater" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <Image src={p5} alt="Blue Denim Shirt" className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            <section className="container mx-auto p-4 mt-10">
                <div className="w-full flex flex-col gap-[10px] justify-center mb-5 items-center">
                    <h3 className="font-Montserrat font-bold mb-10 text-[32px] leading-[32px] text-[#252B42]">
                        Meet Our Team
                    </h3>
                </div>
                {/* <!-- Team Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-2 w-full gap-2">
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t1}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>

                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t2}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t3}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t4}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t5}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t6}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t7}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t8}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Image One --> */}
                    <div className="bg-white overflow-hidden mb-3">
                        <Image
                            src={t9}
                            width={500}
                            height={600}
                            alt="Product Image"
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-bold text-black">Username</h2>
                            <p className="text-gray-500 text-sm">Profession</p>
        
                            {/* Social Icons */}
                            <div className="flex justify-center items-center space-x-4 mt-4">
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaFacebook />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaInstagram />
                                </Link>
                                <Link href="#" className="text-blue-500 text-xl">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto p-4 mb-5 mt-16">
                <div className="w-full flex flex-col text-center gap-[10px] justify-center mb-5 items-center">
                    <h3 className="font-Montserrat font-bold text-[40px] mb-5 leading-[32px] text-[#252B42]">
                        Start your 14 days free trail
                    </h3>
                    <p className="font-Montserrat text-center text-[14px] mb-2 leading-[20px] text-[#737373]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official consequent.
                    </p>
                    <button type="button" className="text-sm bg-blue-400 mt-2 mb-10 py-3 px-6 text-white rounded hover:bg-blue-800">
                        Try it free now
                    </button>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start text-2xl space-y-4 lg:space-y-0 lg:space-x-4">
                        <Link href="#"><FaTwitter className="text-blue-400" /></Link>
                        <Link href="#"><FaFacebookSquare className="text-blue-700" /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaLinkedin className="text-blue-600" /></Link>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}