import React from 'react';
import img1 from "../../../public/images/img3.jpg";

function SmallimgCard() {
  return (
    <div
      className="w-40 h-42 border-2 border-[#ec952b] rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${img1.src})` }}
    ></div>
  );
}

export default SmallimgCard;
