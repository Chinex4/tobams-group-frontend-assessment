import Link from "next/link";

export default function GetInTouchSection() {
  return (
    <section
      id="contact-cta"
      aria-labelledby="contact-cta-heading"
      className="bg-[#1D0617] px-5 py-6 text-white md:px-10 lg:px-16 lg:py-8.75"
    >
      <div className="mx-auto flex max-w-360 flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-[11px] leading-normal text-[#f2e9ef] md:text-[13px]">
            Ready to be a part of something extraordinary?
          </p>

          <h2
            id="contact-cta-heading"
            className="mt-4 max-w-125 text-[17px] font-medium leading-[1.35] text-white md:text-[22px] lg:mt-3 lg:text-[25px]"
          >
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <Link
          href="#contact"
          className="inline-flex h-9 min-w-26.25 items-center justify-center rounded-[3px] bg-[#68124e] px-5 text-[11px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-[40px] md:min-w-[123px] md:text-[13px]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}