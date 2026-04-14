import React from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));

Input.displayName = 'Input';

export default Input;
