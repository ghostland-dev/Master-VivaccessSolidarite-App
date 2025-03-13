
import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-vivaccess-beige/20 to-white pointer-events-none z-0" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-vivaccess-light-blue/5 blur-3xl transform translate-x-1/3 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-vivaccess-light-green/5 blur-3xl transform -translate-x-1/3 animate-pulse-soft animation-delay-1000" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center stagger-animation">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-blue/10 text-vivaccess-blue text-sm font-medium">
            جنوب شرق المغرب
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ربط المجتمعات الريفية <br className="hidden md:block" />
            <span className="text-primary">بالخدمات الأساسية</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            منصة رقمية لتحسين ظروف المعيشة والوصول إلى الخدمات في القرى النائية في جنوب شرق المغرب
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="button-primary w-full sm:w-auto">
              ابدأ
            </button>
            <button className="button-ghost w-full sm:w-auto">
              اعرف المزيد
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1440 74" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 24L120 34C240 44 480 64 720 64C960 64 1200 44 1320 34L1440 24V74H1320C1200 74 960 74 720 74C480 74 240 74 120 74H0V24Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
