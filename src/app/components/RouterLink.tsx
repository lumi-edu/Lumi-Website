import React from 'react';

interface RouterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  state?: any;
}

export function Link({ to, children, state, ...rest }: RouterLinkProps) {
  const { onClick, className } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
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
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default Link;