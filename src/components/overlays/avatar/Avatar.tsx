import React from "react";
import { type AvatarProps } from "./schema";

const sizeClasses: Record<string, string> = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-14 h-14 text-lg",
  xl: "w-20 h-20 text-xl",
};

const shapeClasses: Record<string, string> = {
  circle: "rounded-full",
  square: "rounded-md",
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps & React.ComponentProps<"span">>(
  ({ className = "", src, alt = "", initials, size = "md", shape = "circle", ...props }, ref) => (
    <span
      ref={ref}
      className={`inline-flex items-center justify-center bg-gray-200 overflow-hidden ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-gray-600 select-none">{initials ?? "?"}</span>
      )}
    </span>
  )
);
Avatar.displayName = "Avatar";
export default Avatar;
