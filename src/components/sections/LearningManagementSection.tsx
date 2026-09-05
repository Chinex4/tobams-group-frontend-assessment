import Image from "next/image";
import Link from "next/link";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagementSection() {
  return (
    <section
      id="academy"
      aria-labelledby="learning-management-heading"
      className="bg-[#EEE8ED] px-6 py-12 md:px-10 lg:px-16 lg:py-[74px] mt-10"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Mobile heading */}
        <h2
          id="learning-management-heading"
          className="mb-7 text-[21px] font-medium leading-tight text-primary lg:hidden"
        >
          Learning Management System
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[75px]">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-full sm:max-w-[390px] md:max-w-[450px] lg:max-w-[560px]">
              <Image
                src="/images/sections/learningmgt.jpg"
                alt="Professionals participating in Tobams Group Academy learning and development"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Desktop heading */}
            <h2 className="mb-7 hidden text-[40px] font-medium leading-[1.15] tracking-[0.01em] text-primary lg:block xl:text-[43px]">
              Learning Management System
            </h2>

            {/* Content card */}
            <div className="rounded-[8px] bg-[#DCCFD8] px-6 py-7 md:px-8 md:py-8 lg:px-6 lg:py-6 xl:px-7 xl:py-7">
              <p className="text-[14px] leading-[1.5] text-[#252125] md:text-[16px] lg:text-[16px] lg:leading-[1.55]">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey.
                From technical courses covering the latest programming
                languages and development frameworks to soft skills training
                in leadership, effective communication and project management,
                TG Academy offers a wide range of courses to cater to diverse
                learning needs. With accessible and interactive learning
                materials, individuals can enhance their skills and stay ahead
                in today&apos;s competitive tech landscape.
              </p>

              <div className="mt-7">
                <h3 className="mb-4 text-[16px] font-bold text-primary md:text-[17px]">
                  Some of our courses include:
                </h3>

                <ul className="grid gap-x-7 gap-y-3 pl-5 text-[14px] text-[#252125] md:text-[15px] lg:grid-cols-3 lg:gap-y-4">
                  {courses.map((course) => (
                    <li
                      key={course}
                      className="list-disc whitespace-nowrap"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile button */}
              <Link
                href="#academy-details"
                className="mt-7 inline-flex h-[48px] min-w-[149px] items-center justify-center gap-3 rounded-[4px] bg-primary px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
              >
                <span>Learn More</span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 13L13 5M7 5H13V11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Desktop button */}
            <Link
              href="#academy-details"
              className="mt-8 hidden h-[48px] min-w-[168px] items-center justify-center gap-3 rounded-[4px] bg-primary px-6 text-[16px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:inline-flex"
            >
              <span>Learn More</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 13L13 5M7 5H13V11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}