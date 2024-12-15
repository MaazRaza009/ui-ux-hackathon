import Link from "next/link";
import Image from "next/image";
import hero from "@/images/contact.png";
import arrow from "@/images/curve-arrow.png";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";

export default function Contact(){
    return(
    <div>
        <Navbar2 />
        <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-screen px-6 lg:px-16 py-3">
            {/* <!-- Left Content --> */}
            <div className="space-y-6 lg:text-left lg:w-1/2">
                <p className="text-lg font-semibold tracking-wide mt-5">Contact Us</p>
                <h1 className="text-4xl lg:text-5xl font-bold">Get in touch today!</h1>
                <p className="text-md lg:text-lg">
                    We know how large objects will act, <br /> But things on a small scale.
                </p>
                <p className="font-bold text-xl">Phone : +451 215 215</p>
                <p className="font-bold text-xl">Fax : +451 215 215</p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start text-2xl space-y-4 lg:space-y-0 lg:space-x-4">
                    <Link href="#"><FaTwitter /></Link>
                    <Link href="#"><FaFacebookSquare /></Link>
                    <Link href="#"><FaInstagram /></Link>
                    <Link href="#"><FaLinkedin /></Link>
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

        <section className="py-10 px-5">
            {/* <!-- Header Section --> */}
            <div className="text-center mb-8">
                <p className="text-gray-500 text-sm uppercase mb-2">Visit our office</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    We help small businesses <br />
                    with big ideas
                </h2>
            </div>

            {/* <!-- Contact Options --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                {/* <!-- Option 1 --> */}
                <div className="flex flex-col items-center text-center p-6 bg-white shadow rounded">
                    <div className="w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                        {/* <!-- Phone Icon --> */}
                        <BsTelephone className="w-10 h-10" />
                    </div>
                    <p className="mb-1">georgia.young@example.com</p>
                    <p className="mb-3">georgia.young@ple.com</p>
                    <h3 className="font-semibold text-lg mb-3">Get Support</h3>
                    <button className="py-2 px-6 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                        Submit Request
                    </button>
                </div>

                {/* <!-- Option 2 (Dark Background) --> */}
                <div className="flex flex-col items-center text-center p-6 bg-gray-800 text-white shadow rounded-lg">
                    <div className="w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                        {/* <!-- Location Icon --> */}
                        <IoLocationSharp className="w-10 h-10" />
                    </div>
                    <p className="mb-1">georgia.young@example.com</p>
                    <p className="mb-3">georgia.young@ple.com</p>
                    <h3 className="font-semibold text-lg mb-3">Get Support</h3>
                    <button className="py-2 px-6 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                        Submit Request
                    </button>
                </div>

                {/* <!-- Option 3 --> */}
                <div className="flex flex-col items-center text-center p-6 bg-white shadow rounded-lg">
                    <div className="w-14 h-14 flex items-center justify-center text-blue-500 mb-4">
                        {/* <!-- Mail Icon --> */}
                        <IoIosMail className="w-10 h-10" />
                    </div>
                    <p className="mb-1">georgia.young@example.com</p>
                    <p className="mb-3">georgia.young@ple.com</p>
                    <h3 className="font-semibold text-lg mb-3">Get Support</h3>
                    <button className="py-2 px-6 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                        Submit Request
                    </button>
                </div>
            </div>
        </section>

        <section className="container mx-auto p-4 mt-10">
            <div className="w-full flex flex-col gap-[10px] justify-center mb-5 items-center">
                <Image
                    src={arrow}
                    alt="Arrow"
                />
                <p className="font-Montserrat text-center uppercase text-[14px] mb-2 leading-[20px] font-semibold text-blue-950">
                    We Can't Wait to meet you
                </p>
                <h3 className="font-Montserrat font-bold text-[40px] leading-[32px] text-[#252B42]">
                    Let's Talk
                </h3>
                <button type="button" className="text-sm bg-blue-400 mt-2 mb-10 py-3 px-6 text-white rounded hover:bg-blue-800">
                    Try it free now
                </button>
            </div>
        </section>
        <Footer />
    </div>
    )
}