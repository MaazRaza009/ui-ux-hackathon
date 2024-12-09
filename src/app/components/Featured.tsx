import Image from "next/image";
import f1 from "@/images/featured-1.png";
import f2 from "@/images/featured-2.png";
import f3 from "@/images/featured-3.png";

export default function Featured(){
    return(
        <div>
             {/* <!-- Header Section --> */}
  <div className="text-center py-8 bg-white shadow">
    <h1 className="text-3xl font-bold">Featured Posts</h1>
    <p className="mt-2 text-gray-500">Problems trying to resolve the conflict between the two major realms of ClassNclassNameical physics: Newtonian mechanics</p>
  </div>

  {/* <!-- Featured Posts Section --> */}
  <div className="container mx-auto px-4 py-8">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* <!-- Card --> */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
        src={f1}
        width={400}
        height={200}
        alt="Post Image"
        className="w-full h-48 object-cover" />
        <div className="p-4">
          <span className="text-sm text-blue-500 uppercase font-semibold">Graphic / Trending Posts</span>
          <h2 className="text-xl font-bold mt-2">Loudest in a Madison #1 (Integral)</h2>
          <p className="mt-2 text-gray-500">Gain access to insights and meeting updates on various solutions.</p>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <span>22 April 2022</span>
            <span>24 comments</span>
          </div>
        </div>
      </div>
      {/* <!-- Repeat Card --> */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image
        src={f2}
        width={400}
        height={200}
        alt="Post Image" 
        className="w-full h-48 object-cover" />
        <div className="p-4">
          <span className="text-sm text-blue-500 uppercase font-semibold">Graphic / Trending Posts</span>
          <h2 className="text-xl font-bold mt-2">Loudest in a Madison #1 (Integral)</h2>
          <p className="mt-2 text-gray-500">Gain access to insights and meeting updates on various solutions.</p>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <span>22 April 2022</span>
            <span>24 comments</span>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image 
        src={f3}
        width={400} 
        height={200}
        alt="Post Image" 
        className="w-full h-48 object-cover" />
        <div className="p-4">
          <span className="text-sm text-blue-500 uppercase font-semibold">Graphic / Trending Posts</span>
          <h2 className="text-xl font-bold mt-2">Loudest in a Madison #1 (Integral)</h2>
          <p className="mt-2 text-gray-500">Gain access to insights and meeting updates on various solutions.</p>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <span>22 April 2022</span>
            <span>24 comments</span>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}