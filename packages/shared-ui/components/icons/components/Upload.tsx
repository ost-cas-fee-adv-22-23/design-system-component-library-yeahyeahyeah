import * as React from 'react';
import { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="#475569"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 10a1 1 0 0 0-1 1v2H3v-2a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1Z" />
    <path d="M4.707 6.707 7 4.414V10a1 1 0 1 0 2 0V4.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414Z" />
  </svg>
);
export default SvgUpload;
