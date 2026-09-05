import Image from "next/image";
import LightningIcon from "@/components/ui/LightningIcon";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentSection() {
  return (
    <section
      id="management-development"
      aria-labelledby="management-development-heading"
      className="bg-white px-[22px] py-10 md:px-10 lg:px-16 lg:py-[64px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-[17px] bg-primary-dark px-4 py-5 text-white md:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-[38px]">
            {/* Mobile heading */}
            <h2
              id="management-development-heading"
              className="text-[15px] font-medium leading-[1.4] tracking-[0.01em] lg:hidden"
            >
              Management Development Program
            </h2>

            {/* Image */}
            <div className="relative aspect-[1.22/1] overflow-hidden rounded-[6px] lg:aspect-[0.92/1] lg:min-h-[505px]">
              <Image
                src="/images/sections/management-development.jpg"
                alt="Professionals collaborating during a management development session"
                fill
                sizes="(max-width: 1023px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              {/* Desktop heading */}
              <h2 className="hidden text-[40px] font-medium leading-[1.35] text-white lg:block">
                Management Development
                <br />
                Program
              </h2>

              <div className="mt-0 space-y-5 text-[13px] leading-[1.55] text-[#F6EFF3] lg:mt-5 lg:text-[18px] lg:leading-[1.55]">
                <p>
                  Tobams Group offers a comprehensive Management Development
                  Program designed to equip corporate organisations with the
                  high-performing leaders they need to thrive.
                </p>
                <br />
                <p>
                  Our program includes workshops, seminars, coaching sessions,
                  online courses, and experiential learning opportunities
                  designed to improve leadership, strategic thinking,
                  communication, and other essential managerial competencies
                  for corporate organisations.
                </p>
              </div>

              <ul className="mt-7 space-y-[14px] lg:mt-8 lg:space-y-[18px]">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex min-h-[34px] items-center gap-3 rounded-[7px] bg-primary-light px-3 py-2 text-[12px] text-white lg:min-h-[39px] lg:px-4 lg:text-[15px]"
                  >
                    <LightningIcon variant="white" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}