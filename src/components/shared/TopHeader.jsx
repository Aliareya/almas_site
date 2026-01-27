"use client";
import { Icon } from "@iconify-icon/react";
import { useSite } from "../../context/SiteContext";

function TopHeader() {
  const {sitedata ,socialsLinks} = useSite();
  return (
    <div className="w-full flex flex-row-reverse justify-between h-10 max-sm:h-12 bg-red-950 lg:px-16 max-md:px-5 md:px-5 max-sm:px-3 items-center">
      <div className="flex items-center max-sm:hidden">
        <p className="mt-0.5 mr-2 text-white text-sm">
         {sitedata?.address}
        </p>
        <span className="text-white font-semibold text-sm">: آدرس</span>
      </div>

      <div className="flex items-center">
        <p className="mt-0.5 mr-2 max-sm:mt-0 text-white text-sm">(+93) 793150456</p>
        <span className="text-white font-semibold text-sm">: شماره تماس</span>
      </div>

      <div className="flex items-center gap-2 max-sm:mt-2">
        {/* WhatsApp */}
        {socialsLinks?.map((item , index)=>{
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
                className="w-5.5"
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
