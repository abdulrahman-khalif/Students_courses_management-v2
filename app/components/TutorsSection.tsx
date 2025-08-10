import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TutorsSection = () => {
  const tutors = [
    {
      name: "Theresa Webb",
      title: "Application Support Analyst Lead",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: "./images/Avatar(3).png",
    },
    {
      name: "Courtney Henry",
      title: "Director, Undergraduate Analytics and Planning",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: "./images/Avatar(4).png",
    },
    {
      name: "Albert Flores",
      title: "Career Educator",
      description: "Former PM for Linear, Lambda School, and On Deck.",
      image: "./images/Avatar(6).png",
    },
    {
      name: "Marvin McKinney",
      title: "Co-op & Internships Program & Operations Manager",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: "./images/Avatar(5).png",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <p className="text-green-500 font-semibold mb-2">Tutors</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet the Heroes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
              <p className="text-green-500 font-semibold text-sm mt-1">
                {tutor.title}
              </p>
              <p className="text-gray-600 mt-4 mb-4 text-sm">
                {tutor.description}
              </p>

              <div className="flex gap-4 text-gray-500">
                <a href="#" className="hover:text-blue-400">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-blue-600">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorsSection;
