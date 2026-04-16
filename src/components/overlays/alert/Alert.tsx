import React from "react";
import { type AlertProps } from "./schema";

const variantClasses: Record<string, string> = {
  info: "bg-blue-50 border-blue-300 text-blue-800",
  success: "bg-green-50 border-green-300 text-green-800",
  warning: "bg-yellow-50 border-yellow-300 text-yellow-800",
  danger: "bg-red-50 border-red-300 text-red-800",
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps & Omit<React.ComponentProps<"div">, "onDismiss">>(
  ({ className = "", variant = "info", title, dismissible = false, onDismiss, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={`border rounded-md px-4 py-3 flex gap-3 items-start ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <div className="flex-1">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss as React.MouseEventHandler}
          className="ml-auto shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  )
);
Alert.displayName = "Alert";
export default Alert;
