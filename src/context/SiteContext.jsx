'use client';

import { createContext, useContext } from "react";
import logo from "../../public/images/logo.png";
import { siteData } from "../data/SiteData";
import menus from "../data/Menu";


const SiteContext = createContext();

const data = {
  socialsLinks : siteData.socials,
  siteDesc : siteData.desc,
  sitelogo : logo,
  email : siteData.email,
  phone : siteData.phone,
  address : siteData.address,
  sitedata : siteData,
  menu : menus.headermenu,
  iconMenu :menus.headerIconMenu,
  footer : menus.footer
}

export const SiteProvider = ({ children}) => {
  return (
    <SiteContext.Provider value={data}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
