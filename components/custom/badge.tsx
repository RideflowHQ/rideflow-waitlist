import React from "react";

interface BadgeProps {
  text: string;
  color?: string;
}

const Badge = ({ text, color = "bg-white" }: BadgeProps) => {
  return (
    <div
      className={`text-foreground ${color} rounded-full font-medium px-4 py-1 text-sm`}
    >
      {text}
    </div>
  );
};

export default Badge;
