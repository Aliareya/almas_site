"use client";

import Image from "next/image";
import { useSite } from "../../context/SiteContext";
import Menu from "./Menu";
import { Icon } from "@iconify-icon/react";
import { useState, useEffect } from "react";
import Button from "../ui/Button"
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { sitelogo, iconMenu } = useSite();
  const {islogin} = useAuth();

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 750;
      setIsMobile(mobile);

      // auto close menu when switching to desktop
      if (!mobile) setIsOpen(false);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="h-20 max-sm:h-14 px-3 md:px-5 lg:px-16 flex  items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src={sitelogo} alt="logo" width={140} height={60} />
        </div>

        {/* Desktop Menu */}
        <div className="md:flex sm:hidden max-md:hidden gap-8">
          <Menu />
          {!islogin && <Button/>}
          
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-3">
          {iconMenu?.map((item, index) => (
            <Icon
              key={index}
              icon={item.icon}
              width="20"
              height="20"
              style={{ color: "#364153" }}
            />
          ))}

          {islogin && (
            <Icon
              icon='iconamoon:profile-circle-light'
              width="20"
              height="20"
              style={{ color: "#364153" }}
            />
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button className="mt-1" onClick={() => setIsOpen(!isOpen)}>
              <Icon
                icon={isOpen ? "line-md:close" : "line-md:menu"}
                width="20"
                height="20"
                style={{ color: "#000" }}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full sm:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white flex flex-col gap-3 py-3 rounded-b-md border-b-2 border-red-950 items-end px-3 border-t shadow-md">
          <Menu />
          {!islogin && <Button/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
