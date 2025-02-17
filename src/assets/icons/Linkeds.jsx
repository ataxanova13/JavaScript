import * as React from "react"
const Linkeds = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#99B6C5"
        fillRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Zm11.307-2.748H7.681v10.894h3.626V13.252Zm.239-3.37C11.522 8.814 10.759 8 9.518 8c-1.24 0-2.051.814-2.051 1.882 0 1.046.787 1.883 2.004 1.883h.023c1.264 0 2.052-.837 2.052-1.883ZM24.384 17.9c0-3.346-1.79-4.904-4.175-4.904-1.925 0-2.787 1.057-3.268 1.8v-1.544h-3.627c.048 1.022 0 10.895 0 10.895h3.627v-6.085c0-.325.023-.65.119-.883.262-.65.859-1.324 1.86-1.324 1.313 0 1.838.999 1.838 2.463v5.828h3.626V17.9Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Linkeds
