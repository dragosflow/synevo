import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
}
export const CircleButton = ({ onClick, className, icon }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={`shadow-md p-0.5 font-bold rounded-full shadow-gray-300 border-[1px] border-slate-100/40 ${className}`}
    >
      {icon}
    </button>
  );
};
