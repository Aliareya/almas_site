import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'

function Button() {
  const {setIslogin} = useAuth();
  return (
    <button onClick={(e)=>{setIslogin(true)}}
     className={`px-4 py-1 max-sm:w-full  max-sm:py-1.5 rounded-md bg-[#ec952b] cursor-pointer text-white  hover:text-[#945f1e] text-base font-semibold font-[fantasy] list-none`}>
      {/* <Link href={"/login"}> */}
         ورود
      {/* </Link> */}
    </button>
  )
}

export default Button