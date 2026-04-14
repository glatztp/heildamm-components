import React from 'react';
import { ButtonPropsSchema } from './schema';

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
