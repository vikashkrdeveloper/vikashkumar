import React from "react";
import { useNavigate } from "react-router-dom";
interface LeftArrowProps {
  navigateLink: string;
}
const LeftArrow: React.FC<LeftArrowProps> = ({ navigateLink }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(navigateLink);
      }}
      className=" cursor-pointer"
    >
      <svg
        fill="#ffffff"
        height="20px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <polygon points="513,216.6 158.5,216.6 316.1,59.1 197.9,59.1 1,256 197.9,452.9 316.1,452.9 158.5,295.4 513,295.4 "></polygon>{" "}
        </g>
      </svg>
    </div>
  );
};

export default LeftArrow;
