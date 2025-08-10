import React from "react";
import { FaPlay, FaPencilRuler, FaUsers, FaLightbulb } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io"; // For the Tutors icon
import { BsFillPlayFill } from "react-icons/bs"; // For the video player icon
// import duolingoLogo from './assets/duolingo.png';
// import codecovLogo from './assets/codecov.png';
// import userTestingLogo from './assets/user-testing.png';
// import magicLeapLogo from './assets/magic-leap.png';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden ">
      <div className="container relative z-10 p-5 mx-auto md:p-10 lg:p-20">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          {/* Left side content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Up Your <span className="text-custom-green">Skills</span>
              <br />
              To <span className="text-custom-green">Advance</span> Your
              <br />
              <span className="text-custom-green">Career Path</span>
            </h1>

            <p className="text-base text-gray-600 md:text-lg">
              Learn UI-UX Design skills with weekend UX. The latest online
              learning system and material that help your knowledge growing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:justify-start">
              <button className="flex items-center gap-2 px-8 py-3 font-semibold text-white transition duration-300 ease-in-out bg-[#20B486] rounded-xl hover:bg-green-600">
                Get Started
              </button>
              <button className="flex items-center gap-2 px-8 py-3 font-semibold text-custom-green transition duration-300 ease-in-out border border-text-custom-green rounded-xl hover:bg-green-100">
                Get free trial
              </button>
            </div>

            {/* Feature List */}
            <div className="flex flex-col items-center justify-center pt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-8 md:justify-start">
              <div className="flex items-center gap-2">
                <img
                  src="./images/Speak.png"
                  alt="Icon speak"
                  className="max-w-[24px] max-h-[24px]"
                />
                <span className="text-gray-700">Public Speaking</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="./images/Briefcase.png"
                  alt="Icon Briefcase"
                  className="max-w-[24px] max-h-[24px]"
                />
                <span className="text-gray-700">Career-Oriented</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="./images/Layer 2.png"
                  alt="Icon Layer"
                  className="max-w-[24px] max-h-[24px]"
                />
                <span className="text-gray-700">Creative Thinking</span>
              </div>
            </div>
          </div>

          {/* Right side content - Image and stats */}
          <div className="relative flex-1 hidden md:flex items-center justify-center p-5 md:p-0">
            <div className=" max-w-[495px] overflow-hidden flex items-center justify-center ">
              <img
                src="./images/hero-image.png"
                alt="Student with books"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Stats Overlays */}
            {/* Courses Stat */}
            <div className="absolute hidden p-4 -top-8 -left-5 md:block bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12">
                  <img src="./images/Ring.png" alt="Icon Briefcase" />
                </div>
                <div>
                  <span className="block text-xl font-bold">5K+</span>
                  <p className="text-sm text-gray-500">Online Courses</p>
                </div>
              </div>
            </div>

            {/* Video Courses Stat */}
            <div className="absolute hidden p-4 -bottom-5 -left-5 md:block bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-full">
                  <BsFillPlayFill className="text-purple-500" size={24} />
                </div>
                <div>
                  <span className="block text-xl font-bold">2K+</span>
                  <p className="text-sm text-gray-500">Video Courses</p>
                </div>
              </div>
            </div>

            {/* Tutors Stat */}
            <div className="absolute hidden p-4 -bottom-5 -right-5 md:block bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-[#20B486] rounded-full">
                  <img src="./images/Board.png" alt="Icon Board" />
                </div>
                <div>
                  <span className="block text-xl font-bold">Tutors 250+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration logos */}
        <div className=" flex-col items-center md:gap-27  pt-20 hidden   md:flex md:flex-row ">
          <div className="mb-4 text-2xl  text-gray-500 md:mb-0">
            <span className="text-3xl font-bold text-[#20B486]">250+</span>{" "}
            <br /> Collaboration
          </div>
          <div className="flex items-center   gap-2 xl:gap-25">
            <img src="./images/Group.png" alt="Duolingo Logo" className="h-8" />
            <img
              src="./images/codecov.png"
              alt="Codecov Logo"
              className="h-8"
            />
            <img
              src="./images/UserTesting.png"
              alt="UserTesting Logo"
              className="h-8"
            />
            <img
              src="./images/Magic_Leap.png"
              alt="Magic Leap Logo"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
