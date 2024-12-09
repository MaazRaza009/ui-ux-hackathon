import Image from "next/image";
import picture1 from "@/images/product-cover-5.png";
// import CardText from "./cards-text";
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

export default function ProductCard() {
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="w-full flex flex-col gap-[10px] justify-center mb-5 items-center">
      <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Featured Products
          </p>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
  {/* <!-- Product Grid --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* <!-- Product Card --> */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic1}
        width={500}
        height={600}
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-blue-900">Graphic Design</h2>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-600 font-bold">$6.48</span>
        </div>
        {/* <!-- Color Dots --> */}
        <div className="flex space-x-2 mt-4">
          <span className="w-4 h-4 bg-blue-500 rounded-full border border-gray-200"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full border border-gray-200"></span>
          <span className="w-4 h-4 bg-orange-500 rounded-full border border-gray-200"></span>
          <span className="w-4 h-4 bg-black rounded-full border border-gray-200"></span>
        </div>
      </div>
    </div>
    {/* <!-- Repeat Product Card --> */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic2}
        width={500}
        height={600}
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic3}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic4}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic5}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic6}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic7}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic8}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic9}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic10}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic11}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={pic12}
        width={500}
        height={600}        
        alt="Product Image"
        className="w-full h-72 object-cover"
      />
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
    {/* <!-- Duplicate the Product Card Template as needed --> */}
  </div>
</div>
  );
}