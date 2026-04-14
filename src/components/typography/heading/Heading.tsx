import React from 'react';

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  }
>(({ className = '', level = 1, children, ...props }, ref) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const sizeClasses = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-bold',
    4: 'text-xl font-bold',
    5: 'text-lg font-bold',
    6: 'text-base font-bold',
  };

  return React.createElement(
    Tag,
    {
      ref,
      className: `${sizeClasses[level]} ${className}`,
      ...props,
    },
    children,
  );
});

Heading.displayName = 'Heading';

export default Heading;
