import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[317px] w-full items-center justify-center overflow-hidden md:min-h-[530px]"
    >
      {/* Background image */}
      <Image
        src="/images/hero/heroimg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-16 text-center text-white sm:px-8 md:px-10">
        {/* Label */}
        <div className="mb-7 flex min-h-[48px] min-w-[200px] items-center justify-center rounded-full bg-white/10 px-8 backdrop-blur-[1px] md:mb-5 md:min-h-[47px] md:min-w-[200px]">
          <span className="text-[16px] font-normal uppercase tracking-[0.01em] md:text-[15px]">
            What We Do
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="max-w-[1050px] text-[34px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-[40px] md:text-[48px] lg:text-[56px]"
        >
          {/* Figma mobile text */}
          <span className="md:hidden">
            Learning and Development
          </span>

          {/* Figma desktop text */}
          <span className="hidden md:inline">
            Training and Development
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[900px] text-[19px] font-normal leading-[1.55] sm:text-[20px] md:mt-5 md:max-w-[1120px] md:text-[18px] md:leading-[1.5]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        {/* CTA */}
        <Link
          href="#consultation"
          className="mt-9 flex min-h-[54px] min-w-[270px] items-center justify-center rounded-[4px] bg-primary px-8 text-[19px] font-normal text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-10 md:min-h-[49px] md:min-w-[220px] md:text-[18px]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}