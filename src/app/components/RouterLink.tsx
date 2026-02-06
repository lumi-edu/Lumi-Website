import React from 'react';

interface RouterLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  state?: any;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link({ to, className, children, state, onClick }: RouterLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    window.history.pushState(state || {}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default Link;