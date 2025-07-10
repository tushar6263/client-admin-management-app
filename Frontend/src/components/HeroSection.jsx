import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-auto md:h-140 bg-cover  bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://st3.depositphotos.com/3591429/13334/i/450/depositphotos_133340656-stock-photo-people-using-laptop.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-12 md:py-0 h-full">
        {/* Left Content */}
        <div className="  pt-20 text-white max-w-lg text-center md:text-left  space-y-4 md:space-y-6 lg:mr-60">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight lg:text-7xl mb-10">
            Consultation,<br />
            Design,<br />
            & Marketing
          </h1>
        </div>

        {/* Right Form */}
        <div className="w-full sm:w-4/5 md:w-1/2 lg:w-[28rem] bg-blue-900 bg-opacity-90 text-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Get a Free Consultation</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Area, City"
              className="w-full px-4 py-2 rounded border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full py-2 mt-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition"
            >
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
