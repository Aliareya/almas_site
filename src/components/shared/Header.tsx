// 'use client';
import Image from 'next/image';
import logo from "../../../public/images/logo.png";
import Menu from './Menu';
import { Icon } from '@iconify-icon/react';

function Header() {
  return (
    <div className='w-full h-20 bg-white px-16 flex items-center sticky top-0'>
      <div className='w-1/4 h-20 flex items-center'>
        <Image src={logo} alt='logo' width={150} height={150} />
      </div>
      <div className='w-1/2 flex justify-end gap-8'>
       <Menu/>
      </div>
      <div className='w-1/4 flex gap-3 justify-end items-center'>
      <Icon icon="mingcute:search-line" width="20" height="20"  style={{color: "#364153"}} />
      <Icon icon="fe:heart-o" width="20" height="20"  style={{color: "#364153"}} />
      <Icon icon="lineicons:cart-2" width="20" height="20"  style={{color: "#364153"}} />
      <Icon icon="iconoir:profile-circle" width="20" height="20"  style={{color: "#364153"}} />
      </div>

    </div>
  )
}

export default Header