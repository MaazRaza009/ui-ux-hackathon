import Image from "next/image";
import Men from "@/images/filter-1.png";
import Women from "@/images/product-cover-2.png";
import Accessories from "@/images/filter-3.png";
import Kids from "@/images/filter-4.png";

const EditorsPick = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <div className="w-full flex flex-col gap-[10px] justify-center mb-5 items-center">
        <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
          Editor's Pick
        </h3>
        <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <!-- Men Category --> */}
        <div className="relative">
          <Image
            src={Men}
            width={500}
            height={600}
            alt="Men"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-blue-900 font-bold uppercase shadow-lg text-sm sm:text-base">
            Men
          </div>
        </div>

        {/* <!-- Women Category --> */}
        <div className="relative">
          <Image
            src={Women}
            width={500}
            height={600}
            alt="Women"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-blue-900 font-bold uppercase shadow-lg text-sm sm:text-base">
            Women
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {/* <!-- Accessories --> */}
          <div className="relative">
            <Image
              src={Accessories}
              width={500} 
              height={300}
              alt="Accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-blue-900 font-bold uppercase shadow-lg text-sm sm:text-base">
              Accessories
            </div>
          </div>

          {/* <!-- Kids --> */}
          <div className="relative">
            <Image
              src={Kids}
              width={500}
              height={300}
              alt="Kids"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-blue-900 font-bold uppercase shadow-lg text-sm sm:text-base">
              Kids
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
