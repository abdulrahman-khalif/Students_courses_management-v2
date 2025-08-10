import React from "react";

const TestimonialSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Testimonial Quote */}
        <p className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto mb-12">
          Courses was fantastic! It is Master platform for those looking to
          start a new career, or need a refresher.
        </p>

        {/* Student Profile */}
        <div className="flex flex-col items-center">
          <img
            src="./images/Avatar(7).png"
            alt="Jacob Jones"
            className="w-16 h-16 rounded-full object-cover mb-4"
          />
          <h4 className="text-lg font-bold text-gray-800">Jacob Jones</h4>
          <p className="text-sm text-gray-500">Student, National University</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
