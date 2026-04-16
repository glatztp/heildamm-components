import React from "react";
import { type SpinnerProps } from "./schema";

const sizeClasses: Record<string, string> = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-10 h-10 border-4",
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps & React.ComponentProps<"span">>(
  ({ className = "", size = "md", label = "Loading...", ...props }, ref) => (
    <span ref={ref} role="status" aria-label={label} className={`inline-flex ${className}`} {...props}>
      <span className={`animate-spin rounded-full border-current border-t-transparent ${sizeClasses[size]}`} />
      <span className="sr-only">{label}</span>
    </span>
  )
);
Spinner.displayName = "Spinner";
export default Spinner;
