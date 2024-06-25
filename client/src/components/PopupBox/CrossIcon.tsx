import React from "react";

interface CrossIconProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  popUpMenuOff: Function;
  popUpMenu: boolean;
}
const CrossIcon: React.FC<CrossIconProps> = ({ popUpMenuOff, popUpMenu }) => {
  return (
    <div
      onClick={() => {
        popUpMenuOff(!popUpMenu);
      }}
      className=" absolute top-1 right-1 cursor-pointer hover:bg-[#ccc] border-[1px] transition-all shadow-lg border-[#eee] flex justify-center items-center rounded-full    w-[25px] h-[25px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="14px"
        viewBox="0 -960 960 960"
        width="14px"
        fill="#5f6368"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
};

export default CrossIcon;
