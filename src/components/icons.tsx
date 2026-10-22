/** 앱(src/components/icons.tsx)의 선 아이콘을 웹 SVG 로 옮긴 것. */
type P = { size?: number; stroke?: string; strokeWidth?: number; className?: string };

const base = (size: number, stroke: string, strokeWidth: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke,
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

export const CalendarIcon = ({ size = 21, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.6h17M8.2 3.4v3M15.8 3.4v3" />
    <path d="M7.6 13.2h3M13.4 13.2h3M7.6 16.8h3" />
  </svg>
);

export const MapPinIcon = ({ size = 21, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <path d="M12 21s7-6.3 7-11.3A7 7 0 005 9.7C5 14.7 12 21 12 21z" />
    <circle cx="12" cy="9.7" r="2.4" />
  </svg>
);

export const CameraIcon = ({ size = 25, stroke = "currentColor", strokeWidth = 1.7, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <rect x="2.5" y="5.5" width="19" height="14" rx="3.5" />
    <circle cx="12" cy="12.5" r="4" />
    <path d="M8 5.5L9.4 3h5.2l1.4 2.5" />
  </svg>
);

export const CompassIcon = ({ size = 21, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M15.4 8.6l-1.9 4.9-4.9 1.9 1.9-4.9z" />
  </svg>
);

export const PeopleIcon = ({ size = 21, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <circle cx="9" cy="8.5" r="3.3" />
    <path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" />
    <circle cx="16.8" cy="9.6" r="2.6" />
    <path d="M16.4 14.6c2.4.1 4.1 1.7 4.6 4.4" />
  </svg>
);

export const RingsIcon = ({ size = 21, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <circle cx="9" cy="12.5" r="5.6" />
    <circle cx="15" cy="12.5" r="5.6" />
  </svg>
);

export const BellIcon = ({ size = 15, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <path d="M12 3.5c-3 0-5 2.2-5 5.4v3.3c0 1-.4 2-1.2 2.9l-.7.8h13.8l-.7-.8c-.8-.9-1.2-1.9-1.2-2.9V8.9c0-3.2-2-5.4-5-5.4Z" />
    <path d="M9.6 19.5a2.4 2.4 0 0 0 4.8 0" />
  </svg>
);

export const BookmarkIcon = ({ size = 20, stroke = "currentColor", strokeWidth = 1.6, className, fill = "none" }: P & { fill?: string }) => (
  <svg {...base(size, stroke, strokeWidth, className)} fill={fill}>
    <path d="M6.5 2.6h11a1.4 1.4 0 0 1 1.4 1.4v17a.6.6 0 0 1-.95.49L12 16.7l-5.95 4.79a.6.6 0 0 1-.95-.49V4a1.4 1.4 0 0 1 1.4-1.4Z" />
  </svg>
);

export const SearchIcon = ({ size = 15, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={stroke} strokeWidth={strokeWidth} className={className} aria-hidden>
    <circle cx="7" cy="7" r="4.6" />
    <path d="M10.5 10.5L14 14" />
  </svg>
);

export const FilterIcon = ({ size = 15, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="10" cy="17" r="2" />
  </svg>
);

export const MenuIcon = ({ size = 18, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <path d="M5 7h14M5 12h14M5 17h14" />
  </svg>
);

export const ArrowIcon = ({ size = 16, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const LinkIcon = ({ size = 16, stroke = "currentColor", strokeWidth = 1.6, className }: P) => (
  <svg {...base(size, stroke, strokeWidth, className)}>
    <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
  </svg>
);
