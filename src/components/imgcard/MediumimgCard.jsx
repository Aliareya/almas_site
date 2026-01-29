import React from 'react';
import img1 from "../../../public/images/img2.jpg";

function MediumimgCard() {
  return (
    <div
      className="xl:w-40 xl:h-50 max-md:w-30 md:w-30 max-md:h-40 md:h-40 max-sm:w-25 max-sm:h-38 border-2 border-red-950 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${img1.src})` }}
    ></div>
  );
}

export default MediumimgCard;
