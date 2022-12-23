import * as React from 'react';
import { SVGProps } from 'react';
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="#475569"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#eye_svg__a)">
      <path d="M8 14c4.707 0 7.744-5.284 7.871-5.508a1 1 0 0 0 .001-.98C15.746 7.287 12.732 2 8 2 3.245 2 .251 7.289.126 7.514a.998.998 0 0 0 .002.975C.254 8.713 3.27 14 8 14ZM8 4c2.84 0 5.036 2.835 5.818 4-.784 1.166-2.98 4-5.818 4-2.84 0-5.038-2.838-5.819-4.001C2.958 6.835 5.146 4 8.001 4Z" />
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
    <defs>
      <clipPath id="eye_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEye;
