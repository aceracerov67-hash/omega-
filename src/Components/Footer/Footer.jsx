import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  
  const linksLeft = ["About Us", "Our Services", "Case Studies", "Contact"];
  const linksRight = ["Privacy Policy", "Terms & Conditions", "Support", "FAQ"];

  return (
   
    <footer className="bg-white pt-24 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

        
          <div data-aos="fade-up">
            <h1 className="text-2xl font-bold mb-4">Omega</h1>
            <p className="text-gray-600 mb-6 max-w-sm">
              With lots of unique blocks, <br /> you can easily build a page <br /> without coding.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/FX1_09"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <ul className="space-y-3">
                {linksLeft.map((item, i) => (
                  <li key={i} className="hover:text-blue-500 cursor-pointer transition">▪ {item}</li>
                ))}
              </ul>

              <ul className="space-y-3">
                {linksRight.map((item, i) => (
                  <li key={i} className="hover:text-blue-500 cursor-pointer transition">▪ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            <p className="text-gray-600 mb-6">
              Have a question or need help? Get in touch with our team.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                <a href="tel:+998881121307" className="text-blue-500 hover:underline">
                  +998 88 112 13 07
                </a>
              </li>

              <li>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                <a
                  href="mailto:xatamovafarzona@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                xatamovafarzona@gmail.com
                </a>
              </li>

              <li>
                <span className="font-medium text-gray-900">Address:</span>{" "}
                <a
                  href="https://www.google.com/maps/place/%D0%A5%D0%B0%D0%B4%D1%80%D0%B0,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3247317,69.2438757,16z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b722d3227a5:0x92eae4f5ce0cbe00!8m2!3d41.3242925!4d69.2505036!16s%2Fg%2F1w6r6ndn?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Toshkent.SH Xadra
                </a>
              </li>
            </ul>
          </div>

        </div>

       
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-20 text-center text-gray-500 text-sm border-t pt-8"
        >
          © {new Date().getFullYear()} Propartnyor JS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;