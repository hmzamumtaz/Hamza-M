interface Props {
  title: string;
  color: string;
  category: string;
}

function getProjectInitials(title: string): string {
  return title
    .split(/[\s-]+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 160;
}

export default function ProjectThumbnail({ title, color, category }: Props) {
  const light = isLightColor(color);
  const textColor = light ? color : "#ffffff";
  const metaColor = light ? hexToRgba(color, 0.7) : "rgba(255,255,255,0.6)";
  const glowColor = light ? hexToRgba(color, 0.08) : "rgba(255,255,255,0.04)";
  const decorColor = light ? hexToRgba(color, 0.12) : "rgba(255,255,255,0.08)";
  const decorBorder = light ? hexToRgba(color, 0.2) : "rgba(255,255,255,0.15)";

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${title} project thumbnail`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={color} />
      <circle cx="350" cy="50" r="180" fill={glowColor} />
      <circle cx="50" cy="280" r="160" fill={glowColor} />

      <g transform="translate(40, 20)">
        <rect x="20" y="20" width="160" height="100" rx="8" fill={decorColor} stroke={decorBorder} strokeWidth="1" />
        <rect x="35" y="40" width="50" height="8" rx="4" fill={decorBorder} />
        <rect x="35" y="55" width="40" height="6" rx="3" fill={decorBorder} />
        <rect x="35" y="68" width="45" height="6" rx="3" fill={decorBorder} />
        <rect x="35" y="88" width="30" height="6" rx="3" fill={decorBorder} />
        <rect x="70" y="88" width="35" height="6" rx="3" fill={decorBorder} />
        {category === "mobile" && (
          <rect x="110" y="15" width="65" height="120" rx="10" fill={decorColor} stroke={decorBorder} strokeWidth="1" />
        )}
        {category === "web" && (
          <rect x="110" y="15" width="65" height="60" rx="6" fill={decorColor} stroke={decorBorder} strokeWidth="1" />
        )}
      </g>

      <text
        x="24"
        y="262"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={textColor}
      >
        {getProjectInitials(title)}
      </text>
      <text
        x="24"
        y="280"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="500"
        fill={metaColor}
      >
        {category === "case-study"
          ? "Case Study"
          : category.charAt(0).toUpperCase() + category.slice(1)}
      </text>
      <rect x="24" y="288" width="24" height="2.5" rx="1.25" fill={decorBorder} />
    </svg>
  );
}