'use client';

import { createContext, useContext } from "react";
import logo from "../../public/images/logo.png";
import { siteData } from "../data/SiteData";
import menu , { iconMenu } from "../data/Menu";


const SiteContext = createContext();

const data = {
  sitelogo : logo,
  sitedata : siteData,
  menu : menu,
  iconMenu , iconMenu
}

export const SiteProvider = ({ children}) => {
  return (
    <SiteContext.Provider value={data}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
