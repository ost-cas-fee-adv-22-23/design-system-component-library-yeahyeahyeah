import * as React from 'react';
import { SVGProps } from 'react';
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#475569" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#location_svg__a)">
      <path d="M8 0C4.1 0 1 3.1 1 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7Zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
    </g>
    <defs>
      <clipPath id="location_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocation;
