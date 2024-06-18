import { useLocation } from "react-router-dom";
import LeftArrow from "./left-arrow";
const LivePreview = () => {
  const location = useLocation();
  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen w-full flex flex-col justify-center items-center z-40 select-none`}
      >
        <div className="bg-[#0a0a0a] text-[#ffff] w-full h-[7%]">
          <div className="h-full flex justify-center items-center w-[80px]">
            <LeftArrow navigateLink={`${location.pathname}`} />
          </div>
        </div>
        <div className="w-full h-[93%] flex justify-center items-center">
          <iframe src="https://www.techkshitiz.in" className="w-full h-full">
            Loading
          </iframe>
        </div>
      </div>
    </>
  );
};

export default LivePreview;
