import React from "react";
import "./Pauseicon.css"
export default function Pause({
  fill = "#fff",
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="pause"
      width="300px"
      height="300px"
      viewBox="100 100 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect className="pause" x="7" y="6" width="3" height="12" rx="1.5" fill={fill} />
      <rect className="pause"
        opacity="0.5"
        x="14"
        y="6"
        width="3"
        height="12"
        rx="1.5"
        fill={fill}
      />
    </svg>
  );
}
