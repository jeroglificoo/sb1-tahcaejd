import React from 'react';

export const LeafPattern = () => (
  <svg className="absolute right-0 h-96 w-96 text-primary opacity-20" viewBox="0 0 200 200" fill="none">
    <path
      d="M40 100C40 70 60 40 100 40C140 40 160 70 160 100C160 130 140 160 100 160C60 160 40 130 40 100Z"
      fill="currentColor"
    />
    <path
      d="M70 100C70 85 80 70 100 70C120 70 130 85 130 100C130 115 120 130 100 130C80 130 70 115 70 100Z"
      fill="currentColor"
    />
  </svg>
);

export const AbstractMountain = () => (
  <svg className="absolute left-0 h-[120%] w-[120%] text-accent opacity-15" viewBox="0 0 400 400" fill="none">
    <path d="M0 400L200 100L400 400H0Z" fill="currentColor" />
    <path d="M100 400L200 200L300 400H100Z" fill="currentColor" opacity="0.7" />
  </svg>
);

export const Dots = () => (
  <div className="absolute inset-0 opacity-20">
    <div className="absolute h-3 w-3 bg-secondary rounded-full"></div>
    <div className="absolute h-4 w-4 bg-secondary rounded-full" style={{ top: '20%', left: '80%' }}></div>
    <div className="absolute h-5 w-5 bg-secondary rounded-full" style={{ top: '60%', left: '20%' }}></div>
    <div className="absolute h-3 w-3 bg-secondary rounded-full" style={{ top: '80%', left: '40%' }}></div>
    <div className="absolute h-4 w-4 bg-secondary rounded-full" style={{ top: '30%', left: '60%' }}></div>
    <div className="absolute h-5 w-5 bg-secondary rounded-full" style={{ top: '70%', left: '75%' }}></div>
  </div>
);