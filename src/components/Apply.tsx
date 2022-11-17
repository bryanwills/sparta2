import {HiOutlineComputerDesktop, HiPhoneArrowUpRight} from 'react-icons/hi2';
// import "./ApplyStyles.css";
import React, {useState } from 'react';


export default function Apply() {
  const [navbar, setNavbar] = useState(false);
  // const image = require('../imgs/House.jpg');

  return (
    <div className="container mx-auto px-6">
        <p className="mt-12 mb-8 flex items-center justify-center text-xl sm:text-md md:text-sm xl:text-2xl 2xl:text-2xl">
            Click an option below to apply now!
        </p>
        <div className="">
        <div className="text-lg md:text-md sm:text-sm">
            <ul className="flex flex-row gap-4 items-center place-content-center justify-center">
                <li className="items-center place-content-center">
                    <a href="https://1857586.my1003app.com/51796/register">
                        <HiOutlineComputerDesktop size={50} />
                        <p>New Applicants Click Here</p>
                    </a>
                </li>
                <li>
                    <a href="https://1857586.my1003app.com/51796/register">
                        <HiOutlineComputerDesktop size={50} />
                        <p>Returning Applicants Click Here</p>
                    </a>
                </li>
                <li>
                    <a href="tel:5028191739">
                        <HiPhoneArrowUpRight size={50} />
                        <p>New Applicants Apply Here</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

  </div>
  );
}