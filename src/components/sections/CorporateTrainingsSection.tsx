import TrainingContentSection from "@/components/sections/TrainingContentSection";

const corporateTrainingItems = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTrainingsSection() {
  return (
    <TrainingContentSection
      title="Corporate Trainings"
      description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
      image="/images/sections/corporate-training.jpg"
      imageAlt="Corporate professionals participating in a business training session"
      items={corporateTrainingItems}
    />
  );
}