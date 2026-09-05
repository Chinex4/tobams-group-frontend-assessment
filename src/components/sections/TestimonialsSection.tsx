"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/testimonials/aisha.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/testimonials/john.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/testimonials/chinonso.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    image: "/images/testimonials/john.png",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  const getVisibleTestimonials = () => {
    return Array.from({ length: itemsPerView }, (_, offset) => {
      const index = (currentIndex + offset) % testimonials.length;
      return testimonials[index];
    });
  };

  const handleNext = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white px-5 py-5 md:px-10 lg:px-16 lg:pb-[70px] lg:pt-[32px]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Consultation CTA */}
        <div className="mx-auto max-w-[1200px] rounded-[6px] bg-primary px-5 py-7 text-center text-white md:px-8 lg:py-8">
          {/* Mobile Figma content */}
          <p className="mx-auto max-w-[260px] text-[14px] leading-[1.5] md:hidden">
            Don&apos;t just dream it—let&apos;s build it!
            <br />
            Click now and start your project with Tobams Group. Your journey to
            digital excellence begins here.
          </p>

          {/* Desktop Figma content */}
          <p className="mx-auto hidden max-w-[650px] text-[20px] leading-[1.4] md:block">
            Want to accelerate professional growth and development at your
            organisation?
            <br />
            See how we can help.
          </p>

          <Link
            href="#consultation"
            className="mt-7 inline-flex h-[42px] min-w-[154px] items-center justify-center rounded-[4px] bg-white px-5 text-[12px] font-medium text-primary transition-colors hover:bg-[#f7f3f6] md:mt-6 md:text-[14px]"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Testimonials */}
        <div className="mt-10 lg:mt-[55px]">
          <h2
            id="testimonials-heading"
            className="text-center text-[18px] font-bold text-[#171717] md:text-[28px] lg:text-[40px]"
          >
            Testimonials
          </h2>

          <div
            className={`mt-6 grid gap-[18px] md:mt-8 ${
              itemsPerView === 1
                ? "grid-cols-1"
                : itemsPerView === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
            }`}
          >
            {visibleTestimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${currentIndex}`}
                className="min-h-[190px] rounded-[8px] border-l border-[#ff3f55] bg-white px-4 py-5 shadow-[0_1px_10px_rgba(0,0,0,0.025)] md:min-h-[200px] md:px-5"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[38px] w-[38px] shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      fill
                      sizes="38px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-medium text-[#171717] md:text-[13px]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-[2px] text-[9px] text-[#808080] md:text-[10px]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-5 text-[14px] leading-[1.5] text-[#292529] md:text-[18px]">
                  {testimonial.quote}
                </blockquote>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-5 flex justify-end gap-3 lg:mt-8">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrevious}
              className="flex h-[27px] w-[27px] items-center justify-center rounded-[4px] bg-[#ffe9ec] text-[#ff4558] transition-colors hover:bg-[#ffdce1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4558]"
            >
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7.5 1.5L1.5 7.5L7.5 13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="flex h-[27px] w-[27px] items-center justify-center rounded-[4px] bg-[#ffe9ec] text-[#ff4558] transition-colors hover:bg-[#ffdce1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4558]"
            >
              <svg
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 1.5L7.5 7.5L1.5 13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}