import Image from "next/image"
import Women from "@/images/shop-hero-1-product-slide-1 (1).jpg"

export default function Carausel(){
    return(
        <div>
           {/* <!-- Container --> */}
  <div className="relative h-screen">
    {/* <!-- Background Image --> */}
    <Image src={Women} alt="Background" width={500} height={500} className="absolute inset-0 w-full h-full object-cover" />
    
    {/* <!-- Text Overlay --> */}
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-lg space-y-4 text-white">
          <p className="uppercase text-sm tracking-wide">Summer 2020</p>
          <h1 className="text-4xl md:text-5xl font-bold">New Collection</h1>
          <p className="text-base md:text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <a href="#" className="inline-block px-6 py-3 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}