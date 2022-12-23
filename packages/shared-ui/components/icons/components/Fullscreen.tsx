import * as React from 'react';
import { SVGProps } from 'react';
const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="#475569"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#fullscreen_svg__a)">
      <path d="M15 0h-5a1 1 0 1 0 0 2h2.587L9.294 5.293a1 1 0 1 0 1.414 1.414L14 3.414V6a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1ZM6.707 9.293a1 1 0 0 0-1.414 0L2 12.586V10a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H3.414l3.293-3.293a1 1 0 0 0 0-1.414Z" />
    </g>
    <defs>
      <clipPath id="fullscreen_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFullscreen;
