import { ButtonHTMLAttributes, memo } from 'react';
import { Button } from '@/components/ui/button';

interface OptimizedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

// Memoized button to prevent unnecessary re-renders and optimize INP
export const OptimizedButton = memo(({ 
  children, 
  onClick,
  ...props 
}: OptimizedButtonProps) => {
  // Schedule interactions for better INP
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      // Use scheduler API for better task prioritization
      if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
        (window as any).scheduler.postTask(() => onClick(e), { priority: 'user-blocking' });
      } else {
        requestAnimationFrame(() => onClick(e));
      }
    }
  };

  return (
    <Button 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
});

OptimizedButton.displayName = 'OptimizedButton';
