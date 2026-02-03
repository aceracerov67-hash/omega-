import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 150 : 19,
      features: [
        "5 responsive landing pages",
        "50+ HTML UI elements",
        "Unlimited domains",
        "6 months premium support",
        "Lifetime updates"
      ]
    },
    {
      name: "Business",
      price: isYearly ? 390 : 49,
      features: [
        "5 responsive landing pages",
        "50+ HTML UI elements",
        "Unlimited domains",
        "6 months premium support",
        "Lifetime updates"
      ]
    }
  ];

  const faqs = [
    {
      q: "Can I use Omega for my clients?",
      a: "Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients."
    },
    {
      q: "Do I get free updates?",
      a: "Yes. We update all of our themes regularly, plus are constantly adding new components, pages, and features to our themes. Purchase once and get lifetime updates."
    },
    {
      q: "Does it work with WordPress?",
      a: "Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding."
    },
    {
      q: "Will you provide support?",
      a: "With lots of unique blocks, you can easily build a page without any design or custom coding. With Omega that converts more visitors than any website."
    }
  ];

  return (
    <>
    <div className="font-sans antialiased overflow-hidden">
      <section id="Support" className="bg-[#F8F9FC] pt-20 pb-40 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Pricing & Plans
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg" data-aos="fade-up" data-aos-delay="100">
            Create custom landing pages with Omega that converts more visitors than any website.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16" data-aos="zoom-in" data-aos-delay="200">
            <span className={`text-sm ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-indigo-100 rounded-full p-1 transition-colors relative"
            >
              <div className={`w-5 h-5 bg-indigo-600 rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>Yearly</span>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Save 25%</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
                data-aos={index === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="300"
              >
                <div className="p-10 flex-grow">
                  <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">{plan.name}</span>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-3xl font-bold align-top mt-2">$</span>
                    <span className="text-6xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 text-xl font-medium ml-1">/mo</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Per user</p>

                  <ul className="mt-8 space-y-4 text-left inline-block">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="bg-indigo-100 rounded-full p-1 mr-3">
                          <Check className="w-3 h-3 text-indigo-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-indigo-600 text-white py-5 font-bold text-lg hover:bg-indigo-700 transition-colors">
                  Start 14 Days Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] text-white py-24 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mt-1">
                  <div className="bg-indigo-600 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">{faq.q}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="w-full flex items-center justify-center px-4 py-20 mt-20 overflow-hidden"> 
  <div className="max-w-3xl w-full text-center">
    
    <h1 
      className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
      data-aos="zoom-out-up"
      data-aos-duration="1000"
    >
      Build Fast, Launch Faster
    </h1>
    
    <p 
      className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      Create custom landing pages with Omega that converts <br className="hidden md:block" /> 
      more visitors than any website.
    </p>

   
    <div 
      className="flex flex-col items-center gap-4"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      <button className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg transition-all active:scale-95 hover:shadow-indigo-500/20">
        Start 14 Days Free Trial
      </button>
      
      <p className="text-sm text-gray-400 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        No credit card required
      </p>
    </div>

  </div>
</div>
      </section>
    </div>
    </>
  );
};

export default PricingSection;