import React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface BeamsLinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const BeamsLinkButton = React.forwardRef<HTMLAnchorElement, BeamsLinkButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          buttonVariants({ size: 'lg' }),
          'relative overflow-hidden inline-flex items-center justify-center',
          'transition-all duration-300',
          'shadow-[0_0_20px_hsl(var(--gold)/0.3)] hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)]',
          'bg-primary text-primary-foreground hover:bg-gold-light',
          'text-lg',
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </a>
    );
  }
);

BeamsLinkButton.displayName = 'BeamsLinkButton';

export default BeamsLinkButton;