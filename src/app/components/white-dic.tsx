import Image from "next/image";
import couples from "@/images/winter.png";

export default function Whitediv() {
  return (
    <div className="flex flex-col-reverse mt-12 lg:flex-row items-center h-screen bg-white px-6 lg:px-12">
  {/* <!-- Left Image --> */}
  <div className="w-full lg:w-1/2">
    <Image
      src={couples}
      alt="Part of the Neural Universe"
      className="rounded-lg mx-auto lg:mx-0 w-3/4 lg:w-full"
    />
  </div>

  {/* <!-- Right Content --> */}
  <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
    <p className="text-gray-500 text-lg font-medium mt-4 lg:mt-0">SUMMER 2020</p>
    <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-2">
      Part of the Neural Universe
    </h1>
    <p className="text-gray-600 text-base lg:text-lg mt-4">
      We know how large objects will act, but things on a small scale.
    </p>
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mt-6">
      <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-500">
        BUY NOW
      </button>
      <button className="border border-green-600 text-green-600 py-2 px-6 rounded hover:bg-green-100">
        READ MORE
      </button>
    </div>
  </div>
</div>
  );
}