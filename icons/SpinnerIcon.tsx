import React, { HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export default function SpinnerIcon({ width = 20, height = 20, color= "#eee" }: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox='0 0 100 100'>
      <circle cx="50" cy="50" fill="none" stroke={color} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}
