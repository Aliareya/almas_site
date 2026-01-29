import React from 'react';
import img1 from "../../../public/images/img1.jpg";

function Bigimgcard() {
  return (
    <div
      className="w-52 h-55 border-2 border-red-950 bg-red-200 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${img1.src})` }}
    ></div>
  );
}

export default Bigimgcard;
