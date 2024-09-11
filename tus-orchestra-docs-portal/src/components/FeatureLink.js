import React from 'react';

export default function FeatureLink({ href }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      style={{
        backgroundColor: '#999900',
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
        機能詳細
    </a>
  );
}