import { Button } from "@nextui-org/react";
import AlertIcon from "./AlertIcon";
import CrossIcon from "./CrossIcon";
import React from "react";
interface ConfirmationPopupProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsPopUpOn: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsConformation: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsDownloadConformation: Function;
  isPopUpOn: boolean;
}
const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isPopUpOn,
  setIsPopUpOn,
  setIsConformation,
  setIsDownloadConformation,
}) => {
  return (
    <>
      <div
        style={{
          transition: "all 0.6s",
        }}
        className={`${
          isPopUpOn ? "bottom-[0%] w-full" : " bottom-[100%] w-[0%] "
        }  fixed flex justify-center  items-center bottom-0 left-0 h-screen z-50 backdrop-blur bg-[#000000a7] max-sm:p-2`}
      >
        <div className="w-[400px] max-sm:w-full  relative h-[250px] bg-[#FFFFFF] rounded-[10px]">
          <CrossIcon popUpMenuOff={setIsPopUpOn} popUpMenu={isPopUpOn} />
          <div className=" flex justify-center items-center pt-5">
            <AlertIcon AlertIconsColorCode={"green"} />
          </div>
          <h1 className="text-[#000] text-[25px] text-center p-5  leading-[20px] select-none cursor-text">
            <span className="text-[18px] leading-[20px]">
              Do you want to download
            </span>
            <br />
            <span className="text-[16px] leading-[18px]">
              or view the resume?
            </span>
          </h1>
          <div className="flex justify-center items-center p-2 pr-5 gap-5">
            <Button
              onClick={() => {
                setIsDownloadConformation(true);
                setIsPopUpOn(false);
              }}
              className="hover:bg-[#ff313b74] bg-transparent backdrop-blur-sm transition-all font-[600] text-[#ff303b] rounded-[5px]"
            >
              Download
            </Button>
            <Button
              onClick={() => {
                setIsConformation(true);
                setIsPopUpOn(false);
              }}
              className="bg-[green] rounded-[5px]"
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPopup;
