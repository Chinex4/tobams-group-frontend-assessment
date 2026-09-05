import Link from "next/link";

const trainingBenefits = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultantSection() {
  return (
    <section
      id="training-consultant"
      aria-labelledby="training-consultant-heading"
      className="bg-[#eee8ed] px-5 py-10 md:px-10 lg:px-16 lg:py-[48px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          id="training-consultant-heading"
          className="text-[21px] font-medium leading-tight text-primary md:text-[30px] lg:text-[34px]"
        >
          Training The Consultant
        </h2>

        {/* Figma uses slightly different spelling on mobile/desktop */}
        <p className="mt-4 text-[14px] font-medium leading-[1.5] text-primary md:text-[16px]">
          <span className="md:hidden">
            Maximize Your Potential as a Certified Trainer:
          </span>

          <span className="hidden md:inline">
            Maximise Your Potential as a Certified Trainer:
          </span>
        </p>

        <p className="mt-6 text-[13px] leading-[1.55] text-[#2b272a] md:text-[15px] lg:mt-5 lg:max-w-[1160px]">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified
          training consultant. Learn from professionals in the field, immerse
          yourself in a thorough curriculum, and hone your training methods
          through interactive workshops. Participating in our program will
          enable you to gain expertise in diverse courses while also developing
          the abilities to mentor and encourage others in their career
          advancement.
        </p>

        {/* Benefits box */}
        <div className="mt-5 grid gap-7 rounded-[7px] bg-primary px-5 py-6 text-white lg:grid-cols-2 lg:gap-x-[60px] lg:gap-y-6 lg:px-5 lg:py-6">
          {trainingBenefits.map((benefit) => (
            <article key={benefit.title}>
              <h3 className="text-[14px] font-bold md:text-[15px]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-[12px] leading-[1.55] text-[#fff7fb] md:text-[14px]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="#training-consultant-details"
          className="mt-8 inline-flex h-[47px] min-w-[134px] items-center justify-center gap-4 rounded-[5px] bg-primary px-5 text-[12px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:min-w-[143px] md:text-[14px]"
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
    </section>
  );
}