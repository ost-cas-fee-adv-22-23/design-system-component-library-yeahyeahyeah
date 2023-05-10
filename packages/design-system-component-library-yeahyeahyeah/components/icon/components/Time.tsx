import * as React from 'react';
import { SVGProps } from 'react';
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#475569" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#time_svg__a)">
      <path d="M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6.018 6.018 0 0 1-6 6Z" />
      <path d="M11.5 7H9V4.5a1 1 0 1 0-2 0V8a1 1 0 0 0 1 1h3.5a1 1 0 1 0 0-2Z" />
    </g>
    <defs>
      <clipPath id="time_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTime;
