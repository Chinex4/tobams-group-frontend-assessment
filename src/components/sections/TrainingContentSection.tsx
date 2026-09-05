import Image from "next/image";
import FlashBullet from "@/components/ui/FlashBullet";

type TrainingContentSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  items: string[];
  imageFirstOnDesktop?: boolean;
};

export default function TrainingContentSection({
  title,
  description,
  image,
  imageAlt,
  items,
  imageFirstOnDesktop = false,
}: TrainingContentSectionProps) {
  return (
    <section className="w-full bg-white">
      <div
        className={`mx-auto grid w-full max-w-[1440px] items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-2 lg:gap-[70px] lg:px-8 lg:py-[58px] xl:px-0 ${
          imageFirstOnDesktop ? "" : ""
        }`}
      >
        {/* TEXT */}
        <div
          className={`flex flex-col ${
            imageFirstOnDesktop
              ? "lg:order-2"
              : "lg:order-1"
          }`}
        >
          <h2 className="mb-6 text-[22px] font-medium leading-[1.2] tracking-[0.01em] text-[#171717] md:text-[28px] lg:mb-3 lg:text-[40px] lg:font-medium">
            {title}
          </h2>

          {/* Mobile image position: directly below heading */}
          <div className="mb-7 lg:hidden">
            <div className="relative aspect-[1.45/1] w-full overflow-hidden rounded-[20px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <p className="max-w-[570px] text-[14px] leading-[1.5] text-[#747474] md:text-[16px] lg:text-[18px] lg:leading-[1.55]">
            {description}
          </p>

          <ul className="mt-6 space-y-[12px] lg:mt-5 lg:space-y-[11px]">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[12px] text-[14px] leading-[1.35] text-[#747474] md:text-[16px] lg:text-[18px]"
              >
                <span className="mt-[1px]">
                  <FlashBullet />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP IMAGE */}
        <div
          className={`hidden lg:block ${
            imageFirstOnDesktop
              ? "lg:order-1"
              : "lg:order-2"
          }`}
        >
          <div className={`relative aspect-[1.72/1] w-full overflow-hidden ${!imageFirstOnDesktop ? "rounded-br-[23px] rounded-tl-[56px] rounded-tr-3xl rounded-bl-xl" : "rounded-bl-[56px] rounded-tr-[23px] rounded-br-[24px] rounded-tl-[12px]"}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}