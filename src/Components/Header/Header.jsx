import React, { useEffect, useState } from "react";
import img from "../Header/img.jpg"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navLinks = [
    { name: "Demos", link: "#Demos" },
    { name: "Pages", link: "#Pages" },
    { name: "Support", link: "#Support" },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-violet-600 shadow-sm"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-3xl font-bold text-white cursor-pointer hover:scale-105 transition-transform">
              Omega
            </h1>

         
            <ul className="hidden md:flex items-center gap-10 font-medium text-white">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                  className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <button
                data-aos="zoom-in"
                data-aos-delay="400"
                className="bg-pink-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-pink-700 transition shadow-md active:scale-90"
              >
                Get Started
              </button>
            </ul>

           
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 z-50"
            >
              <span className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        
        {open && (
          <div data-aos="fade-down" className="md:hidden bg-violet-700 text-white absolute w-full left-0 top-20 shadow-lg">
            <ul className="flex flex-col items-center gap-6 py-8 font-medium">
              {navLinks.map((item, index) => (
                <li key={index} onClick={() => setOpen(false)} className="cursor-pointer hover:text-pink-200">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <button
                onClick={() => setOpen(false)}
                className="bg-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition"
              >
                Get Started
              </button>
            </ul>
          </div>
        )}
      </header>

     
      <div id="Demos" className="bg-gradient-to-r from-violet-600 to-pink-600 text-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Get your next <br />
                <span className="text-pink-200">landing page.</span>
              </h1>

              <p className="text-lg text-white/90 mb-8 max-w-xl" data-aos="fade-up" data-aos-delay="200">
                Create custom landing pages with Omega that convert more visitors than
                any website. With lots of unique blocks, you can easily build a page
                without coding.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6" data-aos="fade-up" data-aos-delay="400">
                <button className="bg-white text-violet-700 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 transition shadow-lg active:scale-95">
                  Start 14 Days Free Trial
                </button>
                <span className="text-sm text-white/80 italic">No credit card required</span>
              </div>
            </div>

            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              <img
                src={img}
                alt="Hero"
                className="w-full rounded-2xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-3xl z-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;