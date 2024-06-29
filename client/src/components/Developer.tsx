import { NavLink, useLocation } from "react-router-dom";
import LeftArrow from "./Projects/left-arrow";

const Developer = () => {
  const location = useLocation();
  return (
    <>
      <section className=" absolute top-0 left-0 z-40 bg-[#000] w-[100%] h-screen flex flex-col justify-start items-center overflow-auto">
        <div className="bg-[#0a0a0a] text-[#ffff] w-full h-[7%]">
          <div className="h-full flex justify-center items-center w-[80px]">
            <LeftArrow navigateLink={`${location.pathname}`} />
          </div>
        </div>
        <div className="w-full h-[93%] flex justify-center items-center">
          <div className="w-[100%]  h-[300px] flex justify-center   cursor-default select-none items-center p-[20px] ">
            <div className=" bg-[#0a121e] rounded-[10px] w-[550px] max-[480px]:w-[100%] h-[auto] p-[10px] flex justify-center items-center">
              <div className="p-[10px] w-[30%] h-[100%] space-y-6">
                <h1 className=" text-[#ffc934f0] font-[600] text-center  max-[480px]:text-[13px]">
                  Developed By
                </h1>
                <div className="shadow-[0px_0px_16px_0px_#718096] p-[10px]  w-[150px]  max-[480px]:w-[100px] max-[480px]:h-[100px]  h-[150px] flex justify-center items-center bg-slate-50 rounded-[50%] overflow-hidden">
                  <img
                    className=" w-[96%] h-[96%] max-[480px]:w-[100%] max-[480px]:h-[100%] scale-125 "
                    src={"/assets/images/images/vikash-developer.jpg"}
                    alt="Loading.."
                  />
                </div>
              </div>
              <div className="w-[64%] h-[100%]  pl-[10px] space-y-4">
                <div className="w-[100%] h-[50%] space-y-2   pl-[20px]">
                  <h1 className=" text-[20px] text-center  font-[600] uppercase text-[#e7f33cec] max-[480px]:text-[15px]">
                    {"vikash kumar"}
                  </h1>
                  <h3 className=" text-[15px] text-center  font-[600]  text-[#fff] max-[480px]:text-[10px]">
                    Developer
                  </h3>
                  <h3 className=" text-[12px] text-center  font-[500]  text-[#fff] max-[480px]:text-[10px]">
                    Full Stack Web App & Android App Developer
                  </h3>
                  <h3 className=" text-[12px] text-center  font-[500]  text-[#fff] max-[480px]:text-[10px]">
                    CSE With IOT ( 2k22 )
                  </h3>
                </div>
                <div className=" w-[100%] h-[30%] gap-2  flex justify-center items-center">
                  <NavLink
                    to="https://github.com/vikashkrdeveloper"
                    target=" _ "
                    className="max-[600px]:w-[36px] max-[600px]:h-[36px] max-[480px]:w-[30px] max-[480px]:h-[30px] w-[46px] h-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center"
                  >
                    <i className="fa-brands  fa-github text-[#fff] text-[24px] max-[600px]:text-[20px] max-[480px]:text-[15px]"></i>
                  </NavLink>
                  <NavLink
                    to="https://www.linkedin.com/in/vikash-kumar-8467b0253/"
                    target=" _ "
                    className="max-[480px]:w-[30px] max-[480px]:h-[30px] max-[600px]:w-[36px] max-[600px]:h-[36px]  w-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200 h-[46px] bg-[#172730] rounded-[50%] flex justify-center items-center"
                  >
                    <i className="fa-brands fa-linkedin-in text-[#fff] text-[20px] max-[600px]:text-[20px] max-[480px]:text-[15px]"></i>
                  </NavLink>
                  <NavLink
                    to="https://www.instagram.com/vikashkrdeveloper/"
                    target=" _ "
                    className="max-[480px]:w-[30px] max-[480px]:h-[30px] max-[480px]:hidden max-[600px]:w-[36px] max-[600px]:h-[36px]  w-[46px] h-[46px] border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center"
                  >
                    <i className="fa-brands fa-instagram text-[#fff] text-[20px] max-[600px]:text-[20px] max-[480px]:text-[15px]"></i>
                  </NavLink>
                  <NavLink
                    to={"https://easylearnvikash.tech"}
                    target=" _ "
                    className="max-[480px]:w-[30px] max-[480px]:h-[30px] max-[600px]:w-[36px] max-[600px]:h-[36px]  w-[46px] h-[46px] border-[1px]  border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center"
                  >
                    <i className="fa-solid fa-user   text-[#fff] text-[18px] max-[600px]:text-[20px] max-[480px]:text-[15px]"></i>
                  </NavLink>
                  <NavLink
                    to="mailto:vikashjjp728@gmail.com"
                    className="max-[480px]:w-[30px] max-[480px]:h-[30px] max-[600px]:w-[36px] max-[600px]:h-[36px]  w-[46px] h-[46px]  border-[1px] border-[#1d3641] hover:bg-[#1d3b5d] transition ease-in-out delay-200  bg-[#111f27] rounded-[50%] flex justify-center items-center"
                  >
                    <i className="fa-solid fa-envelope  text-[#fff] text-[20px] max-[600px]:text-[20px] max-[480px]:text-[15px]"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
