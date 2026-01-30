"use client";

import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
import img from "../../../public/images/loginbg.jpg"; 

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex bg-gray-50">
      
      {/* Left Image */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src={img}
          alt="login"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 md:w-full w-full flex justify-center">
        <div className="w-full max-w-lg px-6 max-sm:px-5 pt-10 max-sm:pt-6">
          <h1 className="text-3xl max-sm:text-2xl font-bold text-red-900">Sign In</h1>
          <p className="text-gray-600 pt-2 text-sm">
            Enter your credentials to access your account
          </p>

          {/* Email */}
          <div className="pt-6 max-sm:pt-2">
            <label className="text-sm font-semibold">Email</label>
            <div className="relative mt-1">
              <Icon
                icon="line-md:email-twotone"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-red-900"
              />
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full pl-11 pr-4 py-2.5 border rounded-lg outline-none focus:ring-1 focus:ring-red-900"
              />
            </div>
          </div>

          {/* Password */}
          <div className="pt-5 max-sm:pt-3">
            <label className="text-sm font-semibold">Password</label>
            <div className="relative mt-1">
              <Icon
                icon="mdi:password-outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-red-900"
              />
              <input
                type="password"
                placeholder="Password..."
                className="w-full pl-11 pr-4 py-2.5 border rounded-lg outline-none focus:ring-1 focus:ring-red-900"
              />
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="pt-4 flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" className="accent-red-900" />
              Remember me
            </label>
            <span className="text-sm font-semibold text-[#f5a623] cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Sign In */}
          <div className="pt-6">
            <button className="w-full py-2.5 rounded-lg bg-linear-to-r from-red-950 to-red-900/80 text-white font-semibold hover:opacity-90 transition">
              Sign In
            </button>
          </div>

          {/* Divider */}
          <div className="pt-6 flex items-center gap-3">
            <div className="flex-1 border-t" />
            <span className="text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 border-t" />
          </div>

          {/* Social Login */}
          <div className="pt-5 flex gap-4">
            <button className="w-1/2 py-2 border rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
              <Icon icon="logos:google-icon" />
              Google
            </button>
            <button className="w-1/2 py-2 border rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
              <Icon icon="mdi:github" />
              GitHub
            </button>
          </div>

          {/* Sign up */}
          <div className="pt-6 pb-5 text-center text-sm text-gray-600">
            Don’t have an account?
            <span
              onClick={() => router.push("/register")}
              className="text-[#f5a623] font-semibold cursor-pointer pl-1"
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
