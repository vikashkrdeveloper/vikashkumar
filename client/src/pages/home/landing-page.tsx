import { useState } from "react";
import HeroSection from "../../components/home/HeroSection.tsx";
import ConfirmationPopup from "../../components/PopupBox/Confirmation.tsx";
const LandingPage = () => {
  const [isPopUpOn, setIsPopUpOn] = useState<boolean>(false);
  const [conformation, setConformation] = useState<boolean>(false);
  const [isDownloadConformation, setIsDownloadConformation] =
    useState<boolean>(false);
  return (
    <>
      <HeroSection
        setIsPopUpOn={setIsPopUpOn}
        isResumeDownloaded={conformation}
        isDownloadConformation={isDownloadConformation}
      />
      <ConfirmationPopup
        setIsPopUpOn={setIsPopUpOn}
        setIsDownloadConformation={setIsDownloadConformation}
        setIsConformation={setConformation}
        isPopUpOn={isPopUpOn}
      />
    </>
  );
};

export default LandingPage;
