import React from "react";
interface ErrorMessageProps {
  aboveMessage: string;
  bellowMessage: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  aboveMessage,
  bellowMessage,
}) => {
  return (
    <>
      <div className="w-full h-[75vh] flex justify-center items-center">
        <h1 className="text-[20px] text-center">
          <span className="text-[24px]">{aboveMessage}</span>
          <br />
          <span className="text-[16px] dark:text-[#ffffff9d] text-[#000000bd]">
            {bellowMessage}
          </span>
        </h1>
      </div>
    </>
  );
};

export default ErrorMessage;
