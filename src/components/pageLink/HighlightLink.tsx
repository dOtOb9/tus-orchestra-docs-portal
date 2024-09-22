import React from 'react';

interface SourceLinkProps {
  href: string;
  children: string;
  backgroundColor?: string;
}

const HighlightLink: React.FC<SourceLinkProps> = ({ href, children, backgroundColor }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      style={{
        backgroundColor: backgroundColor || '#25c2a0',
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
        {children}
    </a>
  );
}

export default HighlightLink;