import React from "react";

type DownloadIconProps = React.SVGProps<SVGSVGElement>;

const DownloadIcon: React.FC<DownloadIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M10 1L10 19"
        stroke="#EDEDED"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M19 11L10 19"
        stroke="#EDEDED"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M1 11L10 19"
        stroke="#EDEDED"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DownloadIcon;
