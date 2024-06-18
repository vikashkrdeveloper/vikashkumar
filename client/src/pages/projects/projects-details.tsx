import { Button, Image } from "@nextui-org/react";
import LinkShareIcon from "./link-share-icon";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Technologies from "../../components/Projects/Technologies";
import LivePreview from "../../components/Projects/LivePreview";
import DemoVideo from "../../components/Projects/DemoVideo";
// import ConfirmitionPopup from "../../components/PopupBox/Confirmation";
const ProjectsDetails = () => {
  const location = useLocation();
  const getQueryParames = new URLSearchParams(location.search);
  const queryType = String(getQueryParames.get("type")).toLowerCase().trim();
  const queryMode = String(getQueryParames.get("mode")).toLowerCase().trim();
  const navigate = useNavigate();
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (
        (queryType === "project" && queryMode === "live-preview") ||
        (queryType === "project" && queryMode === "video-demo")
      ) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
    }
  }, [queryType, queryMode]);
  return (
    <>
      {/* <ConirmationPopup /> */}
      {queryType === "project" && queryMode === "live-preview" ? (
        <LivePreview />
      ) : queryType === "project" && queryMode === "video-demo" ? (
        <DemoVideo />
      ) : (
        <section className="">
          <div className="dark:bg-[#0a0a0a] bg-[rgba(255,255,255,0.97)] drop-shadow-[0px_0px_2px_#d8d8d8] select-none  w-full h-[40vh] rounded-[10px] dark:drop-shadow-[inset_0px_0px_2px_#1c1c1c] border-[1px]  p-5 mt-5 border-[#d8d8d8] dark:border-[#1c1c1c] flex  justify-between gap-8">
            <div className="w-[400px] h-full flex justify-center items-center">
              <Image
                width={500}
                height={300}
                className="rounded-[5px] shadow-[0px_0px_2px_#1c1c1c] border-[1px] border-[#1c1c1c] h-[35vh] w-full"
                alt=""
                src="/assets/images/images/first-project.png"
              />
            </div>
            <div className="w-[60%]">
              <li className=" list-none">
                <h1 className="text-[#a9a9a9] dark:text-[#787878] capitalize text-sm font-[500]">
                  Project Name
                </h1>
                <h3 className=" dark:text-white text-sm p-1 pl-0">
                  TechKshitiz
                </h3>
              </li>
              <li className=" list-none mt-2">
                <h1 className="text-[#a9a9a9] dark:text-[#787878] capitalize text-sm font-[500]">
                  Domains
                </h1>
                <div className="  flex dark:text-white text-sm text-[5px] justify-start items-center  gap-5">
                  <NavLink
                    to={"#"}
                    className="flex justify-start items-center gap-1 hover:underline"
                  >
                    <h3 className=" dark:text-white text-sm p-1 pl-0">
                      techkshitiz.in
                    </h3>
                    <LinkShareIcon />
                  </NavLink>
                  <NavLink
                    to={"#"}
                    className="flex justify-start items-center gap-1 hover:underline"
                  >
                    <h3 className=" dark:text-white text-sm p-1 pl-0">
                      github.com/vikashkrdeveloper/techkshitiz
                    </h3>
                    <LinkShareIcon />
                  </NavLink>
                </div>
              </li>
              <li className=" list-none mt-3 flex items-center justify-start gap-8">
                <div>
                  <h1 className="text-[#a9a9a9]   dark:text-[#787878] capitalize text-sm font-[500]  ">
                    Status
                  </h1>
                  <div className=" flex justify-start items-center gap-[6px]">
                    <p className=" rounded-full w-[10px] h-[10px] bg-[#27ac16]"></p>
                    <h3 className=" dark:text-white text-sm p-1 pl-0">Ready</h3>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#a9a9a9] dark:text-[#787878] capitalize text-sm font-[500]">
                    Created
                  </h1>
                  <div className="flex justify-start items-center gap-1">
                    <h3 className=" dark:text-white text-sm p-1 pl-0">
                      7d ago by vikashkrdeveloper
                    </h3>
                    <img
                      src="https://avatars.githubusercontent.com/vikashkrdeveloper?s=44"
                      className="rounded-full w-[25px] h-[25px]"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li className=" list-none mt-10 flex gap-8 justify-start items-center">
                <Button
                  onClick={() => {
                    console.log(location.pathname);

                    navigate(
                      `${location.pathname}?type=project&mode=live-preview`
                    );
                  }}
                  className=" gap-1 outline-none border-none  rounded-[5px] w-[150px]"
                >
                  <p className=" rounded-full w-[10px] mt-1 h-[10px] bg-[#40ff27] animate-pulse"></p>
                  Live Preview
                </Button>

                <Button
                  onClick={() => {
                    navigate(
                      `${location.pathname}?type=project&mode=video-demo`
                    );
                  }}
                  className="gap-1 outline-none border-none  rounded-[5px] w-[150px]"
                >
                  <p className=" rounded-full w-[10px] mt-1 h-[10px] bg-[#ff37da] animate-pulse"></p>
                  Demo Video
                </Button>
              </li>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h1 className=" p-2 pl-0 pr-0 text-[20px] font-[500]">
                About Project
              </h1>
              <p className="text-[15px] text-[#cecece9a]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores aperiam aut et, expedita eos, eligendi adipisci, eaque
                animi laudantium unde voluptatem dolor inventore labore harum
                quisquam praesentium? Minus quasi tempora pariatur ab commodi
                nihil placeat ipsum consequuntur sit quia, aut nemo et quidem
                numquam aliquid quas tenetur nulla! Id, voluptatibus.
              </p>
            </div>
            <div className=" mt-3">
              <Technologies />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectsDetails;
