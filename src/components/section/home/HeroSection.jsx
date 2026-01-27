import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.png"

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            🔥 50% OFF Summer Super Sale
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Step into Style: <br />
            <span className="text-gray-800">Your Ultimate Fashion Destination</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Discover the latest trends in fashion. Upgrade your wardrobe with
            premium quality outfits designed for modern lifestyles.
          </p>

          <Link
            href="#"
            className="inline-block mt-6 bg-[#4B2E2E] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3a2323] transition"
          >
            Shop Now →
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <Image
            src={logo}
            alt="Fashion Model"
            width={450}
            height={600}
            className="rounded-xl object-cover"
            priority
          />

          {/* Small floating badge */}
          <div className="absolute top-10 right-6 bg-white shadow-lg rounded-full p-3">
            😎
          </div>
        </div>
      </div>
    </section>
  );
}
