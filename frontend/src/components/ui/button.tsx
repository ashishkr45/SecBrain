import { ReactNode } from "react";

export const buttonVariants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 transition-colors",
  secondary: "bg-teal-500 text-white hover:bg-teal-600 transition-colors",
  danger: "bg-rose-500 text-white hover:bg-rose-600 transition-colors",
  outline: "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors",
} as const;

export const buttonSizes = {
  sm: "text-sm py-1.5 px-3 rounded-lg",
  md: "text-base py-2 px-4 rounded-lg", 
  lg: "text-lg py-2.5 px-6 rounded-xl font-normal",
} as const;

type VariantType = keyof typeof buttonVariants;
type SizeType = keyof typeof buttonSizes;

export interface ButtonProps {
  variant: VariantType;
  innerText: string;
  size: SizeType;
  icon?: ReactNode;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { 
    variant, 
    innerText, 
    size, 
    icon, 
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      className={`
        ${buttonVariants[variant]} 
        ${buttonSizes[size]} 
        inline-flex items-center justify-center gap-2 
        whitespace-nowrap shadow-sm`}
    >
      {icon && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
      <span>{innerText}</span>
    </button>
  );
};