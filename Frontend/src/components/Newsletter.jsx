import React from 'react';

const Newsletter = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium text-center">
          <li><a href="#" className="hover:text-white/80">Home</a></li>
          <li><a href="#" className="hover:text-white/80">Services</a></li>
          <li><a href="#" className="hover:text-white/80">Projects</a></li>
          <li><a href="#" className="hover:text-white/80">Testimonials</a></li>
          <li><a href="#" className="hover:text-white/80">Contact</a></li>
        </ul>

        {/* Subscribe Section */}
        <div className="flex items-center gap-3">
          <span className="text-sm">Subscribe Us</span>
          <form className="flex border border-white rounded overflow-hidden bg-white/10">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-3 py-1 text-sm bg-blue-500 text-white placeholder-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-white text-blue-500 text-sm font-semibold hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Newsletter;
