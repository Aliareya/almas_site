'use client';
import Image from "next/image";
import { useSite } from "../../context/SiteContext";

import Menu from './Menu';
import { Icon } from '@iconify-icon/react';

function Header() {
  const {sitelogo ,sitedata} = useSite();

  return (
    <div className='w-full h-20 bg-white px-16 flex items-center sticky top-0'>
      <div className='w-1/4 h-20 flex items-center'>
        <Image src={sitelogo} alt='logo' width={150} height={150} />
      </div>
      <div className='w-1/2 flex justify-end gap-8'>
       <Menu/>
      </div>
      <div className='w-1/4 flex gap-3 justify-end items-center'>
      {sitedata?.socials.map((items , index)=>{
        return(
          <Icon key={index} icon={items.icon} width="20" height="20"  style={{color: "#364153"}} />
        )
      })}
      </div>

    </div>
  )
}

export default Header