import {HiOutlineComputerDesktop, HiPhoneArrowUpRight} from 'react-icons/hi2';
import React from 'react';

export default function Contact() {

return (
    <div className="mx-auto">
    <div className="">
        <p>Click an option below to apply Now!</p>
        <div className="flex flex-col space-x-4 flex-wrap items-center justify-center align-center">
            <ul>
                <li>
                    <a href="https://1857586.my1003app.com/51796/register">
                        <HiOutlineComputerDesktop size={60} />
                        <p>New Applicants Click Here</p>
                    </a>
                </li>
                <li>
                    <a href="https://1857586.my1003app.com/51796/register">
                        <HiOutlineComputerDesktop size={60} />
                        <p>Returning Applicants Click Here</p>
                    </a>
                </li>
                <li>
                    <a href="tel:5028191739">
                        <HiPhoneArrowUpRight size={60} />
                        <p>New Applicants Apply Here</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

  </div>
  );
}