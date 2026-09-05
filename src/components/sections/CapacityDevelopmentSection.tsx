import TrainingContentSection from "@/components/sections/TrainingContentSection";

const capacityDevelopmentItems = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopmentSection() {
  return (
    <TrainingContentSection
      title="Capacity Development"
      description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
      image="/images/sections/capacity-development.jpg"
      imageAlt="Team participating in a capacity development workshop"
      items={capacityDevelopmentItems}
    />
  );
}