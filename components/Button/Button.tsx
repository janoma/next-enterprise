import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "border",
    "border-blue-400",
    "transition-colors",
    "delay-50",
  ],
  {
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
    variants: {
      intent: {
        primary: ["bg-blue-400", "text-white", "hover:enabled:bg-blue-700"],
        secondary: [
          "bg-transparent",
          "text-blue-400",
          "hover:enabled:bg-blue-400",
          "hover:enabled:text-white",
        ],
      },
      size: {
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
      },
      underline: { false: [], true: ["underline"] },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  href: string;
  underline?: boolean;
}

export function Button({
  className,
  intent,
  size,
  underline,
  ...props
}: ButtonProps) {
  return (
    <a
      className={twMerge(button({ className, intent, size, underline }))}
      {...props}
    >
      {props.children}
    </a>
  );
}
