export default function DownArrowIcon({ stroke = '#B8B8B8', width = "12", height = "8", className = '' }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.666016 1.33398L5.99935 6.66732L11.3327 1.33398"
        stroke={stroke}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
