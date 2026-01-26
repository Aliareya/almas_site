"use client";
import { Icon } from "@iconify-icon/react";
import { useSite } from "../../context/SiteContext";

function TopHeader() {
  const {sitedata} = useSite();
  return (
    <div className="w-full flex flex-row-reverse justify-between h-10 bg-red-950 px-17.5 items-center">
      <div className="flex items-center">
        <p className="mt-0.5 mr-2 text-white text-sm">
         {sitedata?.address}
        </p>
        <span className="text-white font-semibold text-sm">: آدرس</span>
      </div>

      <div className="flex items-center">
        <p className="mt-0.5 mr-2 text-white text-sm">(+93) 793150456</p>
        <span className="text-white font-semibold text-sm">: شماره تماس</span>
      </div>

      <div className="flex items-center gap-2">
        {/* WhatsApp */}
        {sitedata?.socials.map((item , index)=>{
          return(
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={item.icon}
                width="22"
                height="22"
                style={{ color: "#fff" }}
              />
            </a>
          )
        })}
      </div>
    </div>
  );
}

export default TopHeader;
