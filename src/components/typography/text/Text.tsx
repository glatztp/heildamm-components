import React from 'react';

export const Text = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    variant?: 'body' | 'caption' | 'code';
  }
>(({ className = '', variant = 'body', children, ...props }, ref) => {
  const variantClasses = {
    body: 'text-base',
    caption: 'text-sm text-gray-600',
    code: 'font-mono text-sm bg-gray-100 px-2 py-1 rounded',
  };

  return (
    <p ref={ref} className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
});

Text.displayName = 'Text';

export default Text;
