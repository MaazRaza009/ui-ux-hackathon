import Link from "next/link";
import Image from "next/image";
import hero from "@/images/about.png";
import about from "@/images/about2.png";
import video from "@/images/video.png";
import t1 from "@/images/team-1.jpg";
import t2 from "@/images/team-2.jpg";
import t3 from "@/images/team-3.jpg";
import fab1 from "@/images/fa-brands-1.png";
import fab2 from "@/images/fa-brands-2.png";
import fab3 from "@/images/fa-brands-3.png";
import fab4 from "@/images/fa-brands-4.png";
import fab5 from "@/images/fa-brands-5.png";
import fab6 from "@/images/fa-brands-6.png";
import Navbar2 from "../components/navbar2";

import { FaPlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Footer from "../components/footer";

export default function About() {
    return (
        <div>
        <Navbar2 />
        <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-screen px-6 lg:px-16 py-3">
            {/* <!-- Left Content --> */}
            <div className="space-y-6 lg:text-left lg:w-1/2">
                <p className="text-lg font-semibold tracking-wide mt-5">About Company</p>
                <h1 className="text-4xl lg:text-5xl font-bold">About Us</h1>
                <p className="text-md lg:text-lg">
                    We know how large objects will act. But things on a small scale.
                </p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
                    <button className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Get Quote Now
                    </button>
                </div>
            </div>
            {/* <!-- Right Image --> */}
            <div className="relative lg:w-1/2 mt-8 lg:mt-0">
                <Image
                    src={hero}
                    alt="Hero Pic"
                    className="w-full max-w-sm mx-auto lg:max-w-md"
                />
            </div>
        </div>
            
        <section className="container mx-auto px-16 py-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* <!-- Left Content --> */}
                <div className="md:w-1/2">
                    <h6 className="text-red-500 font-semibold mb-4">Problems trying</h6>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h2>
                </div>

                {/* <!-- Right Content --> */}
                <div className="md:w-1/2 text-gray-600 mt-9 leading-relaxed">
                    <p>
                        Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics.
                    </p>
                </div>
            </div>
        </section>
        {/* <!-- Stats Section --> */}
        <section className="px-10 py-10">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {/* <!-- Stat 1 --> */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">15K</h3>
                    <p className="text-gray-500 mt-2">Happy Customers</p>
                </div>

                {/* <!-- Stat 2 --> */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">150K</h3>
                    <p className="text-gray-500 mt-2">Monthly Visitors</p>
                </div>

                {/* <!-- Stat 3 --> */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">15</h3>
                    <p className="text-gray-500 mt-2">Countries Worldwide</p>
                </div>

                {/* <!-- Stat 4 --> */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">100+</h3>
                    <p className="text-gray-500 mt-2">
                        <span className="border-gray-400">Top Partner</span>
                    </p>
                </div>
            </div>
        </section>
        {/* Video Section */}
        <section className="flex items-center justify-center min-h-screen">
            <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                {/* <!-- Thumbnail Image --> */}
                <Image
                    src={video}
                    alt="Video Thumbnail"
                    className="w-full h-auto object-cover"
                />

                {/* <!-- Play Button --> */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition duration-300">
                    <button className="bg-blue-500 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                        <FaPlay className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </button>
                </div>
            </div>
        </section>
        <section className="container mx-auto p-4 mt-10">
            <div className="w-full flex flex-col gap-[10px] justify-center mb-5 items-center">
                <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                    Meet Our Team
                </h3>
                <p className="font-Montserrat text-center font-normal text-[14px] leading-[20px] text-[#737373]">
                    Problems trying to resolve the conflict between <br /> 
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
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
            </div>
        </section>
        <section className="container mx-auto p-4 mt-10 bg-gray-100">
            <div className="w-full flex flex-col gap-[10px] justify-center mb-5 items-center">
                <h3 className="font-Montserrat font-bold text-[32px] mb-2 mt-4 leading-[32px] text-[#252B42]">
                    Big Companies Are Here
                </h3>
                <p className="font-Montserrat text-center font-normal text-[14px] leading-[20px] text-[#737373]">
                    Problems trying to resolve the conflict between <br /> 
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
        <div className="py-8 mb-8 mt-8">
            <div className="container mx-auto flex flex-wrap justify-center gap-6 items-center">
                <Image src={fab1} alt="Hooli" width={150} height={150} />
                <Image src={fab2} alt="Lyft" width={150} height={150} />
                <Image src={fab3} alt="Leaf" width={150} height={150} />
                <Image src={fab4} alt="Stripe" width={150} height={150} />
                <Image src={fab5} alt="AWS" width={150} height={150} />
                <Image src={fab6} alt="Reddit" width={150} height={150} />
            </div>
        </div>
        </section>

        <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:pl-16 mb-5 bg-blue-600">
            {/* <!-- Left Content --> */}
            <div className="space-y-6 lg:text-left lg:w-1/2 text-white">
                <p className="text-lg font-semibold tracking-wide mt-5 uppercase">Work with Us</p>
                <h1 className="text-4xl lg:text-5xl font-bold">Now Let's grow Yours</h1>
                <p className="text-md lg:text-lg">
                    The gradual accumulation of information about atomic and <br /> small-scale behaviour during the first quarter of 20th
                </p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
                    <button className="outline hover:bg-white hover:text-blue-700 py-2 px-6 rounded">
                        Button
                    </button>
                </div>
            </div>
            {/* <!-- Right Image --> */}
            <div className="relative lg:w-1/2 mt-8 lg:mt-0">
                <Image
                    src={about}
                    alt="About Pic"
                    className="w-full max-w-sm mx-auto lg:max-w-md"
                />
            </div>
        </div>
        <Footer />
    </div>
    );
}