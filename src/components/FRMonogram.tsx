import React from 'react'

interface FRMonogramProps {
  className?: string
  color?: string
}

export const FRMonogram: React.FC<FRMonogramProps> = ({
  className = 'w-10 h-10',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Franklin Rohith Monogram"
    >
      {/* Outer Hexagonal Geometric Frame */}
      <path
        d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="miter"
      />
      {/* Geometric 'F' and 'R' interwoven cuts */}
      {/* Vertical Spine */}
      <path
        d="M22 18V46"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      {/* Top F bar */}
      <path
        d="M22 20H44"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      {/* Middle F/R crossbar */}
      <path
        d="M22 32H38"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      {/* R loop */}
      <path
        d="M38 20V32"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="square"
      />
      {/* R diagonal leg */}
      <path
        d="M32 32L44 46"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="square"
      />
    </svg>
  )
}
