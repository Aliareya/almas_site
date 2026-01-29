"use client";

import React from "react";
import { motion } from "framer-motion";
import Bigimgcard from "../../components/imgcard/Bigimgcard";
import MediumimgCard from "../../components/imgcard/MediumimgCard";
import SmallimgCard from "../../components/imgcard/SmallimgCard";
import bg from "../../../public/images/bg.jpg";

function Home() {
  return (
    <div className="relative w-full h-auto px-16 py-10 mb-5 overflow-hidden">

      {/* 🔹 Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
        style={{ backgroundImage: `url(${bg.src})` }}
      />

      {/* 🔹 Dark Overlay (optional but classy) */}
      <div className="absolute inset-0 bg-white/60" />

      {/* 🔹 Content */}
      <div className="relative z-10 flex gap-10">
        
        {/* Images */}
        <div className="w-1/2 h-auto flex flex-row-reverse gap-3 items-end-safe">
          <div className="w-53 flex flex-col gap-3">
            <Bigimgcard />
            <Bigimgcard />
          </div>
          <div className="w-53 flex flex-col gap-3">
            <SmallimgCard />
            <SmallimgCard />
          </div>
          <div className="w-53 flex flex-col">
            <MediumimgCard />
          </div>
        </div>

        {/* Text */}
        <div className="w-1/2 h-auto flex flex-col justify-center items-end gap-6 text-right">
          
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-red-950 px-5 py-2 rounded-xl text-sm text-white tracking-widest"
          >
            مجموعه جدید ۲۰۲۶
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold leading-tight text-gray-900"
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
            <button className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition">
              مشاهده کالکشن
            </button>
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              خرید آنلاین
            </button>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Home;
