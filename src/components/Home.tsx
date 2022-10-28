import React, {useState } from 'react';

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const image = require('../imgs/House.jpg');

  return (
      <div className="w-screen">
          <div className="px-4 py-4 mx-auto lg:max-w-7xl items-center md:flex md:px-8 place-content-center relative">
             <img src={image} className="hover:bg-blend-darken brightness-50 object-cover" />
             <button
               className=
                "absolute xl:bottom-20 xl:left-40 bottom-20 left-20 bg-[#e3b151] text-[#080e18] px-2 py-2 rounded-2xl hover:bg-[#bf1e2e]">
                Apply Now
                </button>
          </div>
      </div>
  );
}