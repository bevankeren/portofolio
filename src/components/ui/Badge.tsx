interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "yellow" | "pink" | "green" | "purple" | "default";
  className?: string;
}

const colorMap = {
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue",
  yellow: "bg-accent-yellow/20 text-yellow-700 border-accent-yellow",
  pink: "bg-accent-pink/10 text-accent-pink border-accent-pink",
  green: "bg-accent-green/10 text-accent-green border-accent-green",
  purple: "bg-accent-purple/10 text-accent-purple border-accent-purple",
  default: "bg-gray-100 text-text-primary border-black",
};

export default function Badge({
  children,
  color = "default",
  className = "",
}: BadgeProps) {
  return (
    <span className={`neo-badge ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
}
