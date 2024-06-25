import { Button, Image } from "@nextui-org/react";
import ResumeIcon from "./ResumeIcon";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface HeroSectionProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsPopUpOn: Function;
  isResumeDownloaded: boolean;
  isDownloadConformation: boolean;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  setIsPopUpOn,
  isResumeDownloaded,
  isDownloadConformation,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isResumeDownloaded) {
      navigate(`/resume`);
    } else if (isDownloadConformation) {
      const url: string = "/assets/images/pdf";
      const a: HTMLAnchorElement = document.createElement("a");
      a.href = url;
      a.download = "Vikash_Kumar_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("Resume Downloaded Successfully");
    }
  }, [isResumeDownloaded, isDownloadConformation, navigate]);
  return (
    <>
      <div className="flex p-5 justify-center items-start gap-5  max-lg:gap-10 max-lg:flex-col max-lg:items-center ">
        <div>
          <h1 className="font-[800] text-[4rem] max-lg:w-full w-[700px]">
            Vikash Kumar
          </h1>
          <p>I am a full stack developer</p>
          <Button
            onClick={() => {
              setIsPopUpOn(true);
            }}
            className=" flex w-[150px] text-[15px] dark:bg-transparent border-[1px] bg-[#FFFFFF] drop-shadow-[0px_0px_2px_#e5e3e3] dark:border-[#fff] rounded-[20px] mt-6 outline-none "
          >
            <div className=" w-[20px]">
              <ResumeIcon />
            </div>
            <p>Resume</p>
          </Button>
        </div>
        <Image
          width={300}
          height={200}
          className=" w-[400px] h-[300px]"
          alt="NextUI hero Image with delay"
          src="/assets/images/images/vikash-developer.jpg"
        />
      </div> 
    </>
  );
};

export default HeroSection;
