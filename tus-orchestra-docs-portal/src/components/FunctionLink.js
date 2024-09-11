import React from 'react';

export default function FunctionLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      style={{
        backgroundColor: '#cccc00',
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </a>
  );
}