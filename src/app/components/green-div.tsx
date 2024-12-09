import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-screen bg-green-600 px-6 lg:px-12 text-white">
        {/* <!-- Left Content --> */}
        <div className="space-y-6 text-center lg:text-left lg:w-1/2">
          <p className="text-lg font-semibold tracking-wide">SUMMER 2020</p>
          <h1 className="text-4xl lg:text-5xl font-bold">Vita ClassNclassNameic<br />Product</h1>
          <p className="text-md lg:text-lg">
            We know how large objects will act. We know how objects will act. We know
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <p className="text-2xl font-semibold">$16.48</p>
            <button className="bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded">
              ADD TO CART
            </button>
          </div>
        </div>
      
        {/* <!-- Right Image --> */}
        <div className="relative lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={greenman}
            alt="Vita ClassNclassNameic Product"
            className="w-full max-w-sm mx-auto lg:max-w-md"
          />
          {/* <!-- Slider Controls --> */}
        
        </div>
      </div>
    );
  }
  