import React from 'react';
import img1 from "../../../public/images/img1.jpg";

function Bigimgcard() {
  return (
    <div
      className="xl:w-52 xl:h-55 max-md:w-40 md:w-40 max-md:h-52 md:h-52 max-sm:w-28 max-sm:h-37 border-2 border-red-950  rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${img1.src})` }}
    ></div>
  );
}

export default Bigimgcard;
