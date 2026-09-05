import TrainingContentSection from "@/components/sections/TrainingContentSection";

const individualTrainingItems = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function IndividualTrainingSection() {
  return (
    <TrainingContentSection
      title="Personalised Individual Training"
      description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
      image="/images/sections/individual-training.jpg"
      imageAlt="Professional attending an individual development and training session"
      items={individualTrainingItems}
      imageFirstOnDesktop
    />
  );
}