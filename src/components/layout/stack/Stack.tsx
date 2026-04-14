import React from 'react';

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    direction?: 'row' | 'column';
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  }
>(
  (
    {
      className = '',
      direction = 'column',
      gap = 'md',
      align = 'stretch',
      justify = 'start',
      children,
      ...props
    },
    ref,
  ) => {
    const directionClasses = {
      row: 'flex-row',
      column: 'flex-col',
    };

    const gapClasses = {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    };

    return (
      <div
        ref={ref}
        className={`flex ${directionClasses[direction]} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Stack.displayName = 'Stack';

export default Stack;
