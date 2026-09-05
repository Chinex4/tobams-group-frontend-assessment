"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about", hasDropdown: true },
  { label: "What We Do", href: "#what-we-do", hasDropdown: true },
  { label: "Jobs", href: "#jobs", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#academy" },
  { label: "Strategic Partnership", href: "#partnership" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#consultation" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Desktop */}
      <div className="hidden lg:block">
        {/* Top row */}
        <div className="mx-auto flex h-[116px] max-w-[1440px] items-center justify-between px-10">
          <Link
            href="/"
            aria-label="Tobams Group home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Image
              src="/images/logos/logo.png"
              alt="Tobams Group"
              width={166}
              height={55}
              priority
              className="h-auto w-[166px]"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="#account"
              className="flex h-[52px] min-w-[184px] items-center justify-center gap-3 rounded-[4px] bg-primary px-5 text-[18px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M5.5 20C5.5 16.4101 8.41015 13.5 12 13.5C15.5899 13.5 18.5 16.4101 18.5 20"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span>Account</span>

              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="#assessment"
              className="flex h-[52px] min-w-[201px] items-center justify-center rounded-[4px] bg-[#F13F50] px-6 text-[18px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F13F50]"
            >
              Take Assessment
            </Link>
          </div>
        </div>

        {/* Bottom navigation */}
        <nav
          aria-label="Main navigation"
          className="border-t border-[#E8DEE5]"
        >
          <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-center px-8">
            <ul className="flex items-center gap-[35px] xl:gap-[37px]">
              {navigationLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`relative flex h-[78px] items-center gap-2 whitespace-nowrap text-[18px] font-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                      index === 0
                        ? "text-primary after:absolute after:bottom-[22px] after:left-0 after:h-px after:w-full after:bg-primary"
                        : "text-[#171717] hover:text-primary"
                    }`}
                  >
                    <span>{link.label}</span>

                    {link.hasDropdown && (
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden">
        <div className="flex h-[88px] items-center justify-between px-9 sm:px-10 md:px-12">
          <Link
            href="/"
            aria-label="Tobams Group home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Image
              src="/images/logos/logo.png"
              alt="Tobams Group"
              width={124}
              height={42}
              priority
              className="h-auto w-[124px]"
            />
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="flex h-[31px] w-[31px] flex-col items-center justify-center gap-[4px] rounded-[7px] bg-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span
              className={`block h-[2px] w-[19px] rounded-full bg-white transition-transform ${
                isMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-[19px] rounded-full bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-[19px] rounded-full bg-white transition-transform ${
                isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`overflow-hidden border-t border-[#E8DEE5] bg-white transition-[max-height,opacity] duration-300 ${
            isMenuOpen
              ? "max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-5">
            {navigationLinks.map((link) => (
              <li key={link.label} className="border-b border-[#F0E8ED] last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-[50px] items-center justify-between text-[16px] text-[#171717] transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span>{link.label}</span>

                  {link.hasDropdown && (
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 px-6 pb-6">
            <Link
              href="#account"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 items-center justify-center rounded-[4px] bg-primary text-[16px] font-medium text-white"
            >
              Account
            </Link>

            <Link
              href="#assessment"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 items-center justify-center rounded-[4px] bg-[#F13F50] text-[16px] font-medium text-white"
            >
              Take Assessment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}