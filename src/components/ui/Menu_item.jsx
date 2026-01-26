'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


function Menu_item({item}) {
  const pathname = usePathname();
  return (
    <Link href={item?.path}
      className={`${pathname === item.path ? "text-[#ec952b]":""} cursor-pointer  hover:text-[#945f1e] text-base font-semibold font-[fantasy] list-none`}>
      {item.title}
    </Link>
  );
}

export default Menu_item;
