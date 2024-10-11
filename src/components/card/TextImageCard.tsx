import React from 'react';
import 'tailwindcss/tailwind.css';

export default function TextImageCard({ title, imageUrl }) {
  return (
    <div className="m-4">
      <div className="bg-slate-200 rounded-lg flex items-center grid grid-cols-3">
      <p className="font-bold text-2xl text-center text-blue-600 p-8 flex-1 col-span-2">
        {title}
      </p>
      <img src={imageUrl} className="rounded-md p-3" />
      </div>
    </div>
  );
};