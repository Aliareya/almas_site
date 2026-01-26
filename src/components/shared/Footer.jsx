"use client";

import { Icon } from "@iconify-icon/react";
import { useSite } from "../../context/SiteContext";
import Menu_item from "../ui/Menu_item";

const Footer = () => {
  const { footer, siteDesc ,socialsLinks ,address ,email,phone} = useSite();

  return (
    <footer className="bg-[#4B2E2E] text-white lg:px-16 px-3 md:px-5 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10">
        {/* لوگو و توضیحات */}
        <div>
          <h1 className="text-2xl font-bold mb-4">پوشاک</h1>
          <p className="text-sm mb-4">{siteDesc}</p>
          <div className="flex gap-3 mt-4">
            {socialsLinks?.map((item, index) => {
              return (
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
              );
            })}
          </div>
        </div>

        {/* شرکت */}
        <div>
          <h3 className="font-semibold mb-4">فروشگاه</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {footer?.company.map((item, index) => {
              return (
                <Menu_item item={item} key={index}/>
              );
            })}
          </ul>
        </div>

        {/* خدمات مشتریان */}
        <div>
          <h3 className="font-semibold mb-4">خدمات مشتریان</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {footer?.customer.map((item, index) => {
              return (
                 <Menu_item item={item} key={index}/>
              );
            })}
          </ul>
        </div>

        {/* اطلاعات ما */}
        <div>
          <h3 className="font-semibold mb-4">اطلاعات ما</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
               <Icon icon="entypo:address" width="20" height="20"  style={{color: '#fff'}} />
               <p className="text-[12px]">{address}</p>
            </li>
            <li className="flex items-center gap-2">
               <Icon icon="line-md:email" width="24" height="24"  style={{color: '#fff'}} />
               <p className="text-sm">{email}</p>
            </li>
            <li className="flex items-center gap-2">
               <Icon icon="line-md:phone" width="24" height="24"  style={{color: '#fff'}} />
               <p className="text-sm">(+93) {phone}</p>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>تمامی حقوق © 2024 طراحی وب‌سایت پوشاک محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
