import { ButtonHTMLAttributes, memo } from 'react';
import { Button } from '@/components/ui/button';

interface OptimizedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

// Memoized button to prevent unnecessary re-renders
export const OptimizedButton = memo(({ 
  children, 
  onClick,
  ...props 
}: OptimizedButtonProps) => {
  // Passive event listener for better scroll performance
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
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
