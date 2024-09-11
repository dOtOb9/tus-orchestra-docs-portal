import React from 'react';

export default function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      style={{
        backgroundColor: '#25c2a0',
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </a>
  );
}