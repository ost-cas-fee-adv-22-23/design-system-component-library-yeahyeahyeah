import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="#475569"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.6 9.6 2.753 6.754a.5.5 0 0 0-.707 0L.353 8.446a.5.5 0 0 0 0 .708l4.893 4.893a.5.5 0 0 0 .707 0l9.693-9.693a.5.5 0 0 0 0-.708l-1.693-1.692a.5.5 0 0 0-.707 0L5.6 9.6Z" />
  </svg>
);
export default SvgCheckmark;
