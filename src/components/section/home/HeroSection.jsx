'use client';

import Image from 'next/image';
import Link from 'next/link';
import model from '../../../../public/images/hero.png';

export default function HeroSection() {
  return (
    <div className='w-full h-96 flex'>
      <div className='w-1/2'></div>
      <div className='w-1/2 h-96 bg-center bg-cover no ' style={{backgroundImage:`url(${model.src})`}}>hjhjj</div>
    </div>
  );
}
