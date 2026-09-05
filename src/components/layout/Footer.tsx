import Image from "next/image";
import Link from "next/link";

const whatWeDoLinks = [
  { label: "Sustainability Services", href: "#sustainability-services" },
  {
    label: "Strategy Planning and Implementation",
    href: "#strategy-planning",
  },
  { label: "Tech Talent Solutions", href: "#tech-talent-solutions" },
  { label: "Training and Development", href: "#training-development" },
  { label: "IT Consulting Services", href: "#it-consulting" },
  { label: "Social Impact", href: "#social-impact" },
  {
    label: "Talent Recruitment",
    href: "#talent-recruitment",
    desktopOnly: true,
  },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Jobs", href: "#jobs" },
  { label: "Projects", href: "#projects" },
  { label: "Our Founder", href: "#founder" },
  { label: "Business Model", href: "#business-model" },
  { label: "The Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
  { label: "Blog", href: "#blog" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

const solutionLinks = [
  { label: "Tobams Group Academy", href: "#academy" },
  { label: "Help a Tech Talent", href: "#help-tech-talent" },
  {
    label: "Campus Ambassadors Program",
    href: "#campus-ambassadors",
  },
  { label: "Join Our Platform", href: "#join-platform" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#consultation" },
  { label: "Join Our Slack Community", href: "#slack-community" },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[25px] w-[25px]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM19.75 12.98c0-3.17-1.7-4.64-3.96-4.64-1.83 0-2.65 1-3.1 1.71V8.5H9.31V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.67 0 1.69 1.56 1.69 2.79V19h3.38l.03-6.02Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[25px] w-[25px]"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <circle
        cx="12"
        cy="12"
        r="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
      />
      <circle cx="17.2" cy="6.9" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[24px] w-[24px]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M18.5 3h2.8l-6.12 7 7.2 11h-5.64l-4.42-5.78L7.26 21H4.45l6.56-7.5L4.1 3h5.78l4 5.28L18.5 3Zm-.98 16.06h1.55L9.03 4.84H7.37l10.15 14.22Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[23px] w-[23px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 7 7.5 5.5L19.5 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[23px] w-[23px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.3 3.5 9.5 8l-2.1 1.7c1.3 2.7 3.3 4.7 6 6l1.7-2.1 4.4 2.2c.4.2.6.7.5 1.2l-.6 2.6c-.1.5-.5.8-1 .9C10.5 21.4 2.6 13.5 3.5 5.6c.1-.5.4-.9.9-1l2.6-.6c.5-.1 1 .1 1.2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
    desktopOnly?: boolean;
  }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-5 text-[20px] font-bold text-white md:text-[21px]">
        {title}
      </h2>

      <ul className="space-y-[15px]">
        {links.map((link) => (
          <li
            key={link.label}
            className={link.desktopOnly ? "hidden lg:block" : ""}
          >
            <Link
              href={link.href}
              className="text-[14px] leading-[1.5] text-[#F3EDF1] transition-colors hover:text-[#F13F50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-[17px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#10010C] text-[#F3EDF1]">
      <div className="mx-auto w-full max-w-[1600px] px-[22px] py-[50px] sm:px-8 md:px-12 lg:px-[74px] lg:pb-[37px] lg:pt-[62px]">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1.15fr_.65fr_.85fr] lg:gap-[74px]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Tobams Group home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src="/images/logos/logo.png"
                alt="Tobams Group"
                width={197}
                height={74}
                className="h-auto w-[175px] lg:w-[195px]"
              />
            </Link>

            <p className="mt-8 max-w-[365px] text-[14px] leading-[1.55] text-[#F3EDF1] md:text-[17px] lg:mt-[48px] lg:leading-[1.6]">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            <div className="mt-6 flex items-center gap-[18px]">
              <Link
                href="#linkedin"
                aria-label="Tobams Group on LinkedIn"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-[44px] md:w-[44px]"
              >
                <LinkedInIcon />
              </Link>

              <Link
                href="#instagram"
                aria-label="Tobams Group on Instagram"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-[44px] md:w-[44px]"
              >
                <InstagramIcon />
              </Link>

              <Link
                href="#x"
                aria-label="Tobams Group on X"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-[44px] md:w-[44px]"
              >
                <XIcon />
              </Link>
            </div>
          </div>

          <FooterLinks title="What We Do" links={whatWeDoLinks} />

          <FooterLinks title="Company" links={companyLinks} />

          <FooterLinks title="Solution" links={solutionLinks} />
        </div>

        {/* Mobile divider */}
        <div className="my-6 h-px bg-white/10 lg:hidden" />

        {/* Contact / offices card */}
        <div className="mt-0 rounded-[7px] bg-[#25151F] px-4 py-5 lg:mt-[72px] lg:px-[28px] lg:py-[27px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.25fr_.75fr]">
            {/* Registered offices */}
            <div className="order-2 mt-8 lg:order-1 lg:mt-0 lg:pr-7">
              <h2 className="mb-4 text-[19px] font-bold text-white lg:text-[21px]">
                Registered Offices
              </h2>

              <div className="space-y-7 lg:space-y-0">
                {/* UK */}
                <div>
                  <h3 className="mb-1 text-[14px] font-medium text-[#F13F50] lg:text-[16px]">
                    United Kingdom
                  </h3>

                  <address className="text-[13px] not-italic leading-[1.55] text-[#F3EDF1] lg:text-[16px]">
                    07451196 (Registered by Company House)
                    <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    <br className="hidden xl:block" />
                    Kingdom, RM1 4QA
                  </address>
                </div>
              </div>
            </div>

            {/* Nigeria */}
            <div className="order-3 mt-7 border-t border-white/10 pt-7 lg:order-2 lg:mt-0 lg:border-l lg:border-t-0 lg:border-white/10 lg:px-7 lg:pt-11">
              <h3 className="mb-1 text-[14px] font-medium text-[#F13F50] lg:text-[16px]">
                Nigeria
              </h3>

              <address className="text-[13px] not-italic leading-[1.55] text-[#F3EDF1] lg:text-[16px]">
                RC 1048722 (Registered by the Corporate Affairs Commission)
                <br />
                4, Muaz Close, Angwari-Rimi
              </address>
            </div>

            {/* Contact */}
            <div className="order-1 lg:order-3 lg:border-l lg:border-white/10 lg:pl-7">
              <h2 className="mb-5 text-[19px] font-bold text-white lg:text-[21px]">
                Contact Information
              </h2>

              <div className="space-y-[15px]">
                <a
                  href="mailto:theteam@tobamsgroup.com"
                  className="flex items-center gap-4 text-[13px] text-[#F3EDF1] transition-colors hover:text-white lg:text-[16px]"
                >
                  <span className="shrink-0 text-[#F13F50]">
                    <MailIcon />
                  </span>

                  <span>theteam@tobamsgroup.com</span>
                </a>

                <a
                  href="tel:+447886600748"
                  className="flex items-center gap-4 text-[13px] text-[#F3EDF1] transition-colors hover:text-white lg:text-[16px]"
                >
                  <span className="shrink-0 text-[#F13F50]">
                    <PhoneIcon />
                  </span>

                  <span>+447886600748</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-6 h-px bg-white/10 lg:mt-[45px]" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center gap-7 pt-7 text-center lg:flex-row lg:justify-between lg:pt-[32px] lg:text-left">
          {/* Desktop copyright */}
          <p className="order-2 text-[13px] leading-[1.6] text-[#DCD4D9] lg:order-1 lg:text-[16px]">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>

          {/* Policies */}
          <nav
            aria-label="Legal"
            className="order-1 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 lg:order-2 lg:gap-x-[48px]"
          >
            <Link
              href="#terms"
              className="text-[13px] text-[#DCD4D9] underline underline-offset-2 hover:text-white lg:text-[15px]"
            >
              Terms and Conditions
            </Link>

            <Link
              href="#privacy"
              className="text-[13px] text-[#DCD4D9] underline underline-offset-2 hover:text-white lg:text-[15px]"
            >
              Privacy Policy
            </Link>

            <Link
              href="#cookies"
              className="text-[13px] text-[#DCD4D9] underline underline-offset-2 hover:text-white lg:text-[15px]"
            >
              Cookies Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}