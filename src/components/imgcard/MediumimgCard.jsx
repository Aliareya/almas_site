import React from 'react';
import img1 from "../../../public/images/img2.jpg";

function MediumimgCard() {
  return (
    <div
      className="w-40 h-50 border-2 border-red-950 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${img1.src})` }}
    ></div>
  );
}

export default MediumimgCard;
