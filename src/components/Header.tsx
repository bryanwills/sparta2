import React, {useState } from 'react';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  // const image = require('../imgs/House.jpg');

  return (
      <div className="w-full">
          <div className="px-2 py-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
             {/* <img src={image} /> */}
             <p className="ml-10 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
             Sparta Mortgage LLC is a single owner, independent mortgage broker licensed in Florida, Georgia, Indiana, Kentucky and South Carolina. Sparta Mortgage formally began May 2019 and even though very young, the owner brings a background in brokering continuously since 2003, knowledge, integrity and over 700 successful transactions. Independent mortgage brokers often are small and flourish because clients like yourself see the value in what they offer.
             <br /><br/>Here is why you should consider working with a broker like Sparta over banks, credit unions and lenders:
             </p>
          </div>
      </div>
  );
}