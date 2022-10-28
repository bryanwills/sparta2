import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaGithub} from 'react-icons/fa';
import "./FooterStyles.css";

export default function Footer() {
  return (
      <div className="footer">
        <div className="container justify-between text-black dark:text-amber-300 bg-white dark:bg-black">
            <div className="col solutions">
                <h6>Solutions</h6>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Apply</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col support">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Apply</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="content space-between">
                    <div className="rights color-[#080e18] dark:color-[#e3b151]">
                        <p>&copy; Sparta Mortgage All rights reserved</p>
                    </div>
                    <div className="social-icons">
                        <FaFacebook size={20} style={{marginRight:'10px'}} />
                        <FaInstagram size={20} style={{marginRight:'10px'}} />
                        <FaTwitter size={20} style={{marginRight:'10px'}} />
                        <FaGithub size={20} style={{marginRight:'10px'}} />
                    </div>
                </div>
            </div>
        </div>

      </div>
  );
}