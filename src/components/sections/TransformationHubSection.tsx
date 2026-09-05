import Image from "next/image";
import Link from "next/link";
import LightningIcon from "@/components/ui/LightningIcon";

const transformationBenefits = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHubSection() {
  return (
    <section
      id="transformation-hub"
      aria-labelledby="transformation-hub-heading"
      className="bg-white px-[22px] py-10 md:px-10 lg:px-16 lg:py-[50px]"
    >
      <div className="mx-auto max-w-[1440px] rounded-[14px] bg-[#EF435333] px-[14px] py-5 md:px-7 md:py-8 lg:px-8 lg:py-8">
        {/* Header */}
        <div>
          <p className="text-[13px] font-medium italic text-[#0878F9] md:text-[15px]">
            Learning With Our CEO:
          </p>

          <h2
            id="transformation-hub-heading"
            className="mt-2 text-[19px] font-medium italic leading-[1.35] text-[#68124E] md:text-[24px] lg:text-[27px]"
          >
            Transformation Hub With Jite Newton
          </h2>

          <p className="mt-5 text-[12px] leading-[1.55] text-[#30252C] md:text-[14px] lg:max-w-[1000px] lg:text-[15px] lg:leading-[1.55]">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-[28px]">
          {/* Image */}
          <div className="relative aspect-[1.4/1] overflow-hidden rounded-[6px] lg:aspect-auto lg:min-h-[340px]">
            <Image
              src="/images/sections/transformation-hub.jpg"
              alt="Professional exploring technology and career development opportunities"
              fill
              sizes="(max-width: 1023px) 100vw, 500px"
              className="object-cover object-center"
            />
          </div>

          {/* Benefits container */}
          <div className="rounded-[7px] bg-[#FFFFFF4D] p-4 md:p-5 lg:flex lg:flex-col lg:justify-between">
            <ul className="grid gap-[10px] lg:grid-cols-2 lg:gap-x-[18px] lg:gap-y-[11px]">
              {transformationBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex min-h-[55px] items-center gap-3 rounded-[10px] bg-white px-4 py-3 text-[12px] text-[#30252C] md:text-[14px]"
                >
                  <LightningIcon />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#learn-more"
              className="mt-5 inline-flex h-[42px] min-w-[127px] items-center justify-center gap-3 rounded-[3px] bg-primary px-5 text-[12px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-[14px] lg:self-start"
            >
              <span>Learn More</span>

              <svg
                width="17"
                height="17"
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