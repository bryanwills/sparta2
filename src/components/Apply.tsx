import {HiOutlineComputerDesktop, HiPhone} from 'react-icons/hi2';
import "./ApplyStyles.css";
import React, {useState } from 'react';


export default function Header() {
  const [navbar, setNavbar] = useState(false);
  // const image = require('../imgs/House.jpg');

  return (
    <div className="apply grid grid-col-2 mt-10">
    <div className="justify-between text-black dark:text-amber-300 bg-white dark:bg-black">
        <p>Apply Now!</p>
        <div className="col solutions">
            <ul>
                <li>
                    <a href="https://1857586.my1003app.com/51796/register">
                        <HiOutlineComputerDesktop size={60} />
                        <p>Apply</p>
                </a></li>
            </ul>
        </div>
        <div className="col support">
            <ul>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
            </ul>
        </div>
        <div className="apply bottom">
            <div className="content space-between">
                <div className="">

                </div>
                <div className="">
                    <HiOutlineComputerDesktop size={20} style={{marginRight:'10px'}} />
                </div>
            </div>
        </div>
    </div>

  </div>
  );
}