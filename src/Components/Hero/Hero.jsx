import React, { useEffect } from 'react'
import img from '../Hero/images/layout-11.svg'
import img2 from '../Hero/images/layers-3.png'
import img3 from '../Hero/images/icon3.png'
import clients from '../Hero/images/clients.png'
import image from '../Hero/images/image1.png'
import app from '../Hero/images/app.png'
import icon from '../Hero/images/icon.png'
import icon1 from '../Hero/images/icon1.png'
import img1 from '../Hero/images/img.png'
import PricingSection from './PricingSection'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="bg-white py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

            <div className="border border-violet-800 rounded-lg p-6" data-aos="fade-up">
              <div className="mb-6">
                <div className="w-10 h-10 text-indigo-600">
                  <img src={img} alt="" />
                </div>
              </div>
              <h1 className="text-lg font-semibold text-gray-900 mb-4">Multiple Modern Layouts</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.
              </p>
            </div>

            <div className="border border-violet-800 rounded-lg p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-6">
                <div className="w-10 h-10 text-indigo-600">
                  <img src={img2} alt="" />
                </div>
              </div>
              <h1 className="text-lg font-semibold text-gray-900 mb-4">Built with Bootstrap 4</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.
              </p>
            </div>

            <div className="border border-violet-800 rounded-lg p-6" data-aos="fade-up" data-aos-delay="400">
              <div className="mb-6">
                <div className="w-10 h-10 text-indigo-600">
                  <img src={img3} alt="" />
                </div>
              </div>
              <h1 className="text-lg font-semibold text-gray-900 mb-4">Fully Responsive</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-16 overflow-hidden" data-aos="fade-in">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden w-full">
            <div className="flex w-max" style={{ animation: "scroll 60s linear infinite" }}>
              {[...Array(9)].map((_, i) => (
                <img key={`a-${i}`} src={clients} alt="Clients" className="h-10 mx-2 shrink-0" />
              ))}
              {[...Array(9)].map((_, i) => (
                <img key={`b-${i}`} src={clients} alt="Clients" className="h-10 mx-2 shrink-0" />
              ))}
            </div>
          </div>
        </div>
        <style>
          {` @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } `}
        </style>
      </section>

      <section id="Pages" className="bg-[#f7f8fc] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Make beautiful <br /> landing pages easily.
              </h1>
              <p className="text-gray-500 text-lg max-w-xl mb-10">
                Create custom landing pages with Omega that converts more visitors than any website.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
                <div className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm">✓</span><span className="text-gray-700 font-medium">50+ HTML Elements</span></div>
                <div className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm">✓</span><span className="text-gray-700 font-medium">Bootstrap 4 Framework</span></div>
                <div className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm">✓</span><span className="text-gray-700 font-medium">6 Month Support</span></div>
                <div className="flex items-center gap-3"><span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm">✓</span><span className="text-gray-700 font-medium">Lifetime Updates</span></div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src={image} alt="App Preview" />
              <div className="absolute -inset-6 bg-indigo-200/40 blur-3xl -z-10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="zoom-in">
              <ul>
                <li className="flex justify-center lg:justify-start">
                  <img src={app} alt="App Preview" className="w-[400px]" />
                </li>
              </ul>
            </div>
            <div data-aos="fade-left">
              <ul className="space-y-10">
                <li>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Fits everything on <br /> all your devices.</h1>
                  <p className="text-gray-500 max-w-xl">Create custom landing pages with Omega easily.</p>
                </li>
                <li className="flex items-start gap-5">
                  <span className="w-10 h-10 flex items-center justify-center text-indigo-600"><img src={icon} alt="" /></span>
                  <div><h2 className="font-semibold text-gray-900 mb-1">Faster Development UI Kits</h2><p className="text-gray-500 text-sm">Build your next landing page quickly.</p></div>
                </li>
                <li className="flex items-start gap-5">
                  <span className="w-10 h-10 flex items-center justify-center text-indigo-600"><img src={icon1} alt="" /></span>
                  <div><h2 className="font-semibold text-gray-900 mb-1">Pre-made Pages for Easy Setup</h2><p className="text-gray-500 text-sm">Build your next landing page quickly.</p></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-[#f7f8fc] py-17 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customers love us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Create custom landing pages with Omega easily.</p>
          </div>
          <div data-aos="zoom-out-up">
            <Swiper modules={[Navigation]} navigation slidesPerView={1} className="relative">
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row items-center gap-12 m-4">
                  <div className="flex-shrink-0"><img src={img1} alt="Customer" className="w-[315px] h-[370px] object-cover rounded-xl border border-indigo-500" /></div>
                  <div className="text-center lg:text-center max-w-xl">
                    <div className="text-indigo-600 text-7xl mb-6">’’</div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">OMG! I cannot believe that I have got a brand new landing page after getting Omega.</p>
                    <h4 className="font-semibold text-gray-900">Jonathan Taylor</h4>
                    <p className="text-sm text-gray-500">CEO at Creativex</p>
                  </div>
                </div>
              </SwiperSlide>
               <SwiperSlide>
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row items-center gap-12 m-4">
                  <div className="flex-shrink-0"><img src={img1} alt="Customer" className="w-[315px] h-[370px] object-cover rounded-xl border border-indigo-500" /></div>
                  <div className="text-center lg:text-center max-w-xl">
                    <div className="text-indigo-600 text-7xl mb-6">’’</div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">OMG! I cannot believe that I have got a brand new landing page after getting Omega.</p>
                    <h4 className="font-semibold text-gray-900">Jonathan Taylor</h4>
                    <p className="text-sm text-gray-500">CEO at Creativex</p>
                  </div>
                </div>
              </SwiperSlide>
               <SwiperSlide>
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col lg:flex-row items-center gap-12 m-4">
                  <div className="flex-shrink-0"><img src={img1} alt="Customer" className="w-[315px] h-[370px] object-cover rounded-xl border border-indigo-500" /></div>
                  <div className="text-center lg:text-center max-w-xl">
                    <div className="text-indigo-600 text-7xl mb-6">’’</div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">OMG! I cannot believe that I have got a brand new landing page after getting Omega.</p>
                    <h4 className="font-semibold text-gray-900">Jonathan Taylor</h4>
                    <p className="text-sm text-gray-500">CEO at Creativex</p>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <PricingSection />
      </div>
    </>
  )
}

export default Hero

