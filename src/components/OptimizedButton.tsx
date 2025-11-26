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
  return (
    <Button 
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
});

OptimizedButton.displayName = 'OptimizedButton';
