import * as React from 'react';
import { SVGProps } from 'react';
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 10"
    fill="#475569"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 4H7V1A1 1 0 0 0 5.375.219l-5 4a1 1 0 0 0 0 1.562l5 4A1 1 0 0 0 7 9V6h8a1 1 0 0 0 0-2Z" />
  </svg>
);
export default SvgLeft;
