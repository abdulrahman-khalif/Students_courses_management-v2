import React from "react";
import { FaLaptopCode, FaDesktop, FaChartLine } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-custom-green font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Fostering a playful & engaging learning{" "}
            <br className="hidden md:inline" /> environment
          </h2>
        </div>

        {/* Service Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1: Interaction Design */}
          <div className="w-full md:w-1/3 p-8 bg-white hover:bg-[#20B486] text-white rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 group">
            <div className="mb-4">
              <FaLaptopCode
                size={36}
                className="text-custom-green group-hover:text-white"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-white">
              Interaction Design
            </h3>
            <p className="mb-6 text-gray-600 group-hover:text-gray-100">
              Lessons on design that cover the most recent developments.
            </p>
          </div>

          {/* Card 2: UX Design Course */}
          <div className="w-full md:w-1/3 p-8 bg-white hover:bg-[#20B486] rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 group">
            <div className="mb-4">
              <FaDesktop
                size={36}
                className="text-custom-green group-hover:text-white"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-white">
              UX Design Course
            </h3>
            <p className="mb-6 text-gray-600 group-hover:text-gray-100">
              Classes in development that cover the most recent advancements in
              web.
            </p>
          </div>

          {/* Card 3: User Interface Design */}
          <div className="w-full md:w-1/3 p-8 bg-white hover:bg-[#20B486] group rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="mb-4">
              <FaChartLine
                size={36}
                className="text-custom-green group-hover:text-white"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-white">
              User Interface Design
            </h3>
            <p className="mb-6 text-gray-600 group-hover:text-gray-100">
              User Interface Design courses that cover the most recent trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
