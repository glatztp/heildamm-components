import React from 'react';

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' }
>(({ className = '', size = 'lg', children, ...props }, ref) => {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div
      ref={ref}
      className={`mx-auto w-full ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
