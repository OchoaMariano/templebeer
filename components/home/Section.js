import React from 'react';

function Section({ children, title }) {
  return (
    <div className="flex-shrink-0 min-w-[100vw] h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Section;
