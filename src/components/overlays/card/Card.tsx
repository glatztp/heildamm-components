import React from 'react';

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-white shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = 'Card';

export default Card;
