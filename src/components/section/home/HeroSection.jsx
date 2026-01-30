'use client';
import { motion } from "framer-motion";
import bg from "../../../../public/images/bg.jpg";
import bg1 from "../../../../public/images/G.png";

export default function HeroSection() {
  return (

    <div className="relative w-full h-auto lg:px-15.5 max-sm:px-3 md:px-5 max-md:px-5 py-10 mb-5 overflow-hidden">

    <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
        style={{ backgroundImage: `url(${bg.src})` }}
        />

      {/* 🔹 Dark Overlay (optional but classy) */}
      <div className="absolute inset-0 bg-white/60" />

      {/* 🔹 Content */}
      <div className="relative z-10 flex md:flex-row flex-row max-md:flex-col-reverse max-sm:flex-col-reverse md:gap-1 lg:gap-10 max-sm:gap-3">
        
        {/* Images */}
        <div className="md:w-1/2 max-sm:w-full max-md:w-[80%] bg-center bg-cover  h-auto flex max-md:flex-row md:flex-row flex-row-reverse gap-3 items-end-safe"
        >
          <img src={bg1.src} alt="" className="w-full h-full" />
        </div>

        {/* Text */}
        <div className="w-1/2 max-md:w-full md:w-1/2  h-auto flex flex-col justify-center items-end gap-6 text-right">
          
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-r from-red-950 to-red-900/80 px-5 py-2 rounded-xl text-sm text-white tracking-widest"
          >
            مجموعه جدید ۲۰۲۶
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl max-sm:text-3xl font-bold leading-tight text-gray-900"
          >
            درخشش استایل  
            با <span className="text-black">الماس</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-700 leading-relaxed max-w-md"
            >
            «الماس» جایی‌ست که طراحی مدرن با کیفیت ممتاز ترکیب می‌شود.
هر جزئیات با دقت انتخاب شده تا استایلی خاص و ماندگار خلق کند.
انتخابی متفاوت برای بانوان خوش‌سلیقه که به سبک خود اهمیت می‌دهند.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 mt-4"
          >
            <div className="flex gap-4">
  {/* Primary Button */}
  <button className="relative px-8 max-sm:px-5 max-sm:py-2 py-3 rounded-full font-medium text-white
    bg-linear-to-r from-red-950 to-red-900/80
    shadow-md shadow-red-900/80
    hover:shadow-lg hover:shadow-red-900/40
    hover:scale-105
    transition-all duration-300">
    مشاهده کالکشن
  </button>

  {/* Secondary Button */}
  <button className="px-7 py-2.5 rounded-full font-medium
    border text-black hover:bg-linear-to-r from-red-950 to-red-900/80
    hover:text-white
    hover:scale-105
    transition-all duration-300">
    خرید آنلاین
  </button>
</div>

          </motion.div>
        </div>

      </div>
    <div/>
    </div>
  );
}
