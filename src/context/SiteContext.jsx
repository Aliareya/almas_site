'use client';

import { createContext, useContext } from "react";
import logo from "../../public/images/logo.png";
import { siteData } from "../data/SiteData";


const SiteContext = createContext();

const data = {
  sitedata : siteData
}

export const SiteProvider = ({ children}) => {
  return (
    <SiteContext.Provider value={data}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
