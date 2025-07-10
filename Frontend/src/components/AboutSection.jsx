import React from 'react';
import { FaHome, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      {/* Top - Realtor Info + Images */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Not Your Average Realtor</h2>
          <p className="text-gray-600">
            Real Trust is one of the most trustworthy & result-oriented real-estate design and marketing consulting to get the success you are just a click away from.
          </p>
        </div>
        <div className="flex items-center gap-4 justify-center md:w-1/2">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-200">
            <img src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="agent" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-orange-200">
              <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=400&q=80" alt="meeting" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-blue-200">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="teamwork" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom - Why Choose Us */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition">
            <FaHome className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Potential ROI</h3>
            <p className="text-sm text-gray-600">
              Maximize your returns by making informed renovations and getting the best property value.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition">
            <FaPaintBrush className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Design</h3>
            <p className="text-sm text-gray-600">
              Our strategic designs ensure the perfect visual appeal and usability for your properties.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition">
            <FaBullhorn className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Marketing</h3>
            <p className="text-sm text-gray-600">
              Our cutting-edge campaigns and strategies guarantee maximum visibility and success.
            </p>
          </div>
          
        </div>
      </div>
          <div className="mb-14 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80"
            alt="about1"
            className="w-full h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=500&q=80"
            alt="about2"
            className="w-full h-56 object-cover rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=500&q=80"
            alt="about3"
            className="w-full h-56 object-cover rounded-md"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Fifteen years of experience in real estate, excellent customer service and a
          commitment to work hard, listen and follow through. We provide quality service to
          build relationships with clients and, more importantly, maintain those relationships
          by communicating effectively.
        </p>
        <button className="mt-2 px-6 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
