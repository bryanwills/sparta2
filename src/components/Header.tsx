import React, {useState } from 'react';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
      <div className="w-full bg-white shadow dark:bg-black dark:text-amber-300">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
             <p className="mx-2 py-2">
             Sparta Mortgage LLC is a single owner, independent mortgage broker licensed in Florida, Georgia, Indiana, Kentucky and South Carolina. Sparta Mortgage formally began May 2019 and even though very young, the owner brings a background in brokering continuously since 2003, knowledge, integrity and over 700 successful transactions. Sparta Mortgage is and will remain very small. Bigger is not better in the mortgage industry. Independent mortgage brokers often are small and flourish because clients like yourself see the value in what they offer. Here is why you should consider working with a broker like Sparta over banks, credit unions and lenders:
             </p>
          </div>
          <div>
            <ul className="flex text-align-center w-full justify-center">
                <li>💵 Extremely competitive interest rates!</li>
                <li>🚫 No fees!</li>
                <li>💵 Very low overhead!</li>
                <li>🌎 Virtually all loan programs!</li>
                <li>💪 Aggressive lending standards!</li>
                <li>👨‍🎓Licensing required</li>
                <li>💼 Experience</li>
                <li>👓 Specialization</li>
                <li>💡 Problem Solving</li>
                <li>🕔 Accessibility</li>
            </ul>
          </div>
      </div>
  );
}