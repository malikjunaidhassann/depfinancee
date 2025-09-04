"use client"
import React, { useState, useCallback } from "react";
import { testimonialData } from "../utils/TestimonialsData";

// Lightweight arrow components
const ArrowRight = React.memo(() => (
  <span className="text-lg leading-none">→</span>
));
ArrowRight.displayName = "ArrowRight";

const ArrowLeft = React.memo(() => (
  <span className="text-lg leading-none">←</span>
));
ArrowLeft.displayName = "ArrowLeft";

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClickPrev = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  }, []);

  const handleClickNext = useCallback(() => {
    setIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const currentTestimonial = testimonialData[index];

  return (
    <div className=" flex flex-col  px-8 py-10 font-poppins text-base font-medium bg-no-repeat bg-left-bottom bg-[length:28.5rem] lg:bg-[length:61rem]">
      <div className="relative flex flex-col lg:flex-row-reverse items-center">
        {/* Testimonial Section */}
        <div className="pt-10 text-center flex-1">
          <p className="text-[min(3.8vw,2rem)] font-light leading-[min(6.4vw,3.2rem)] px-2 text-[hsl(240,38%,20%)]">
            &ldquo; {currentTestimonial.testimonial} &rdquo;
          </p>
          <div className="mt-8">
            <p className="text-[min(4vw,2rem)] font-bold text-[hsl(240,38%,20%)]">
              __{currentTestimonial.name}
            </p>
            {currentTestimonial.job && (
              <p className="text-[min(4vw,2rem)] font-medium text-[hsl(240,18%,77%)]">
                {currentTestimonial.job}
              </p>
            )}
          </div>
        </div>

        {/* Arrow Controls - bottom right like the reference */}
        <div className="pointer-events-auto absolute bottom-6 right-6 lg:right-12 flex gap-3">
          <button
            title="previous"
            onClick={handleClickPrev}
            type="button"
            className="w-10 h-10 rounded-full border border-gray-300 bg-white text-[hsl(240,38%,20%)] hover:bg-teal-600 hover:text-white transition-colors focus:outline-none"
          >
            <ArrowLeft />
          </button>
          <button
            title="next"
            onClick={handleClickNext}
            type="button"
            className="w-10 h-10 rounded-full border border-gray-300 bg-white text-[hsl(240,38%,20%)] hover:bg-teal-600 hover:text-white transition-colors focus:outline-none"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
