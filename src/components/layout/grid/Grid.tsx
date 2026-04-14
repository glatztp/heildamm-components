import React from 'react';

export const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    columns?: number;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }
>(({ className = '', columns = 3, gap = 'md', children, ...props }, ref) => {
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div
      ref={ref}
      className={`grid gap-4 ${gapClasses[gap]} ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      {...props}
    >
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
