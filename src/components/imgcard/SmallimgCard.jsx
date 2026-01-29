import React from 'react';
import img1 from "../../../public/images/img3.jpg";

function SmallimgCard() {
  return (
    <div
      className="xl:w-40 xl:h-42 max-md:w-40 md:w-30 max-md:h-40 md:h-40 max-sm:w-29 max-sm:h-30 border-2 border-red-950 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${img1.src})` }}
    ></div>
  );
}

export default SmallimgCard;
