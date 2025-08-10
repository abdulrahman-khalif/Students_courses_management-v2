import React from "react";
import { FaStar } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const PopularClassesSection = () => {
  const courses = [
    {
      id: 1,
      image: "./images/Image(1).png",
      duration: "08 hr 12 mins",
      category: "Design",
      title: "Figma UI UX Design..",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      rating: 4.3,
      reviews: 16325,
      instructor: "Jane Cooper",
      instructorImage: "./images/Avatar.png",
      enrolled: 2001,
      price: "$17.84",
    },
    {
      id: 2,
      image: "./images/Image(2).png",
      duration: "06 hr 3 mins",
      category: "Design",
      title: "Learn With Shoaib",
      description:
        "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
      rating: 3.9,
      reviews: 832,
      instructor: "Jenny Wilson",
      instructorImage: "./images/Avatar(1).png",
      enrolled: 2001,
      price: "$8.99",
    },
    {
      id: 3,
      image: "./images/Image(3).png",
      duration: "01 hr 2 mins",
      category: "Design",
      title: "Building User Interface..",
      description:
        "Learn how to apply User Experience (UX) principles to your website designs.",
      rating: 4.2,
      reviews: 125,
      instructor: "Esther Howard",
      instructorImage: "./images/Avatar(2).png",
      enrolled: 2001,
      price: "$11.70",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-green-500 font-semibold mb-2">Explore Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Most Popular Class
          </h2>
          <p className="text-gray-600 mt-2">
            Let's join our famous class, the knowledge provided will definitely
            be useful for you.
          </p>
        </div>

        {/* Course Cards Container */}
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-full md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-custom-green">
                    {course.category}
                  </p>
                  <a href="#" className="text-gray-500 hover:text-green-500">
                    <BsArrowUpRight />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>

                <div className="flex items-center justify-end gap-1 text-yellow-500 mb-4">
                  <FaStar size={16} />
                  <span className="text-gray-700 text-sm font-semibold">
                    {course.rating}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({course.reviews})
                  </span>
                </div>

                <div className="flex justify-between items-center  pt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-xs font-semibold">
                        {course.instructor}
                      </p>
                      <p className="text-xs text-gray-500">
                        {course.enrolled} Enrolled
                      </p>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-green-500">
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button and Carousel Dots */}
        <div className="flex flex-col items-center mt-12 gap-4">
          <button className="px-6 py-3 font-semibold text-green-500 border border-green-500 rounded-full hover:bg-green-100 transition duration-300 ease-in-out">
            Explore All Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesSection;
