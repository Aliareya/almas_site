"use client";

import Menu_item from "../ui/Menu_item";
import { useSite } from "../../context/SiteContext";

function Menu() {
  const { menu } = useSite();
  return (
    <>
      {menu.map((item, index) => {
        return(
          <Menu_item key={index} item={item} />
        ) 
      })}
    </>
  );
}

export default Menu;
