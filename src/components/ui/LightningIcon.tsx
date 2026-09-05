type LightningIconProps = {
  variant?: "white" | "purple";
};

export default function LightningIcon({
  variant = "purple",
}: LightningIconProps) {
  const isWhite = variant === "white";

  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M7.87301 0.761963V6.98419H13.2063L6.09523 16.762V10.5397H0.761902L7.87301 0.761963Z"
        fill={isWhite ? "#FFFFFF" : "#FFFFFF"}
        stroke={isWhite ? "#FFFFFF" : "#650B4E"}
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}