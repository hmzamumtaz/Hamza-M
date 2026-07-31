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

const categoryIcons: Record<string, string> = {
  web: "M60 140 L100 100 L140 140 L140 220 L60 220Z M80 160 L120 160 M80 180 L120 180 M80 200 L100 200",
  mobile:
    "M120 90 L120 230 Q120 240 130 240 L170 240 Q180 240 180 230 L180 90 Q180 80 170 80 L130 80 Q120 80 120 90Z M145 215 a5 5 0 110 10 a5 5 0 010 -10",
  "case-study":
    "M80 100 L80 220 L160 220 L160 140 L130 100Z M130 100 L130 140 L160 140 M95 150 L145 150 M95 165 L145 165 M95 180 L130 180",
};

export default function ProjectThumbnail({ title, category, color: _color }: Props) {
  const accent = "#0d7377";
  const accentLight = "#e6f3f3";
  const accentMuted = "#b8d9d9";
  const iconPath = categoryIcons[category] || categoryIcons.web;
  const initials = getProjectInitials(title);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#ffffff" />

      <rect width="400" height="8" fill={accent} />

      <circle cx="80" cy="70" r="55" fill={accentLight} />
      <text
        x="80"
        y="78"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill={accent}
      >
        {initials}
      </text>

      <g
        transform="translate(260, 50) scale(0.6)"
        stroke={accentMuted}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d={iconPath} />
      </g>

      <text
        x="28"
        y="210"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#1f2937"
      >
        {title.length > 22 ? title.slice(0, 20) + "..." : title}
      </text>

      <rect x="28" y="222" width="32" height="3" rx="1.5" fill={accent} />

      <text
        x="28"
        y="260"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="500"
        fill="#9ca3af"
      >
        {category === "case-study"
          ? "Case Study"
          : category === "mobile"
          ? "Mobile Design"
          : "Web Design"}
      </text>

      <rect x="28" y="272" width="100" height="2" rx="1" fill={accentLight} />
    </svg>
  );
}