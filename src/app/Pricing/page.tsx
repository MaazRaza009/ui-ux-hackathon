import Link from "next/link";
import Image from "next/image";
import fab1 from "@/images/fa-brands-1.png";
import fab2 from "@/images/fa-brands-2.png";
import fab3 from "@/images/fa-brands-3.png";
import fab4 from "@/images/fa-brands-4.png";
import fab5 from "@/images/fa-brands-5.png";
import fab6 from "@/images/fa-brands-6.png";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";

export default function Pricing() {
    return(
        <div>
          <Navbar2 />
          {/* <!-- Pricing Section --> */}
          <div className="bg-gray-50 text-center py-16 px-6">
            <div className="bg-white pt-10 pb-10 pl-5 pr-5">
              {/* <!-- Subtitle --> */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Pricing
              </p>
              {/* <!-- Title --> */}
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Simple Pricing</h1>
              {/* <!-- Breadcrumb --> */}
              <nav className="text-sm text-gray-500 mb-6">
                <ol className="flex justify-center space-x-2">
                  <li><Link href="#" className="hover:underline">Home</Link></li>
                  <li>/</li>
                  <li>Pricing</li>
                </ol>
              </nav>
            </div>

            {/* <!-- Title --> */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10">Pricing</h1>
            {/* <!-- Subtitle --> */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>

            {/* <!-- Toggle Buttons --> */}
            <div className="flex justify-center items-center mb-12 space-x-4">
              <button className="py-2 px-6 text-sm font-medium rounded-full bg-blue-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Monthly
              </button>
              <button className="py-2 px-6 text-sm font-medium rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
                Yearly
              </button>
              <span className="text-sm font-medium text-blue-500 bg-blue-100 py-1 px-3 rounded-full">
                Save 25%
              </span>
            </div>

              {/* <!-- Pricing Cards --> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <!-- Free Plan --> */}
                <div className="border border-blue-600 rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">FREE</h2>
                  <p className="text-gray-600 mb-4">Organize across all apps by hand</p>
                  <p className="text-4xl font-bold text-gray-800 mb-4">$0 <span className="text-sm font-medium">Per Month</span></p>
                  <ul className="text-left mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span> Unlimited product updates
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span> Basic support
                    </li>
                  </ul>
                </div>

                {/* <!-- Standard Plan (Highlighted) --> */}
                <div className="border-2 border-blue-600 rounded-lg bg-gray-900 text-white p-6 shadow-lg hover:shadow-lg transition transform scale-105">
                  <h2 className="text-xl font-semibold mb-2">STANDARD</h2>
                  <p className="mb-4">Organize across all apps by hand</p>
                  <p className="text-4xl font-bold mb-4">$9.99 <span className="text-sm font-medium">Per Month</span></p>
                  <ul className="text-left mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="text-white mr-2">✔</span> Unlimited product updates
                    </li>
                    <li className="flex items-center">
                      <span className="text-white mr-2">✔</span> Priority support
                    </li>
                  </ul>
                </div>

                {/* <!-- Premium Plan --> */}
                <div className="border border-blue-600 rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">PREMIUM</h2>
                  <p className="text-gray-600 mb-4">Organize across all apps by hand</p>
                  <p className="text-4xl font-bold text-gray-800 mb-4">$19.99 <span className="text-sm font-medium">Per Month</span></p>
                  <ul className="text-left mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span> Unlimited product updates
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span> 24/7 support
                    </li>
                  </ul>
                </div>
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
          </div>

          {/* <!-- Pricing FAQs Section --> */}
          <div className="bg-white text-center py-20 px-6">
            {/* <!-- Title --> */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing FAQs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Problems trying to resolve the conflict between <br /> the two major realms of Classical physics
            </p>

            {/* <!-- FAQ Grid --> */}
            <div className="grid grid-cols-1 pl-8 sm:text-center md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* <!-- Single FAQ --> */}
              <div className="flex text-start space-x-4">
                <span className="text-blue-500 text-xl">➤</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
                  </p>
                </div>
              </div>

              {/* <!-- Repeat FAQ Item (copy this block for each FAQ) --> */}
              <div className="flex text-start space-x-4">
                <span className="text-blue-500 text-xl">➤</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
                  </p>
                </div>
              </div>

              {/* <!-- Additional FAQ Items --> */}
              <div className="flex text-start space-x-4">
                <span className="text-blue-500 text-xl">➤</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
                  </p>
                </div>
              </div>

              {/* <!-- Additional FAQ Items --> */}
              <div className="flex text-start space-x-4">
                <span className="text-blue-500 text-xl">➤</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
                  </p>
                </div>
              </div>

              {/* <!-- Additional FAQ Items --> */}
              <div className="flex text-start space-x-4">
                <span className="text-blue-500 text-xl">➤</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
                  </p>
                </div>
              </div>

              {/* <!-- Additional FAQ Items --> */}
              <div className="flex text-start space-x-4">
                <span className="text-blue-500 text-xl">➤</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door ENIM <br /> RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Footer --> */}
            <div className="mt-12">
              <p className="text-gray-600">
                Haven’t got your answer? <Link href="#" className="text-gray-500 font-semibold hover:text-blue-500">Contact our support</Link>
              </p>
            </div>
          </div>

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