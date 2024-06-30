import { NavLink, useLocation, useNavigate } from "react-router-dom";
import InstagramIcon from "./Icons/InstagramIcon";
import GithubIcon from "./Icons/GithubIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import Developer from "./Developer";
import { useEffect, useState } from "react";

const Footer = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const type = new URLSearchParams(location.search).get("type");
  const [isDark, setIssDark] = useState<boolean>(false);
  const theme = localStorage.getItem("theme");
  console.log(theme);
  
  useEffect(() => {
    if (theme === "dark") {
      setIssDark(true);
    } else {
      setIssDark(false);
    }
  }, [theme]);
  return (
    <>
      {String(type).toLowerCase().trim() === "developer-details" && (
        <Developer />
      )}
      <footer className="dark:bg-[#1f2937] shadow-[0px_0px_5px_#d9d9d9] dark:shadow-none  bg-[#d 9d9d9] w-full h-auto rounded-[5px] p-5">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-1 max-sm:mb-[1px] items-center w-full p-2 mb-1">
          <div className="flex gap-2">
            <NavLink to="https://github.com/vikashkrdeveloper" target="_blank">
              <GithubIcon isDark={isDark} width={20} height={20} />
            </NavLink>
            <NavLink to="https://twitter.com/vikash2696v" target="_blank">
              <TwitterIcon width={20} height={20} />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/vikashkrdeveloper"
              target="_blank"
            >
              <InstagramIcon width={20} height={20} />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/vikashkrdeveloper"
              target="_blank"
            >
              <LinkedinIcon width={20} height={20} />
            </NavLink>
            <NavLink to="https://www.facebook.com/" target="_blank">
              <FacebookIcon width={20} height={20} />
            </NavLink>
          </div>
          <div className="flex ">
            <ul className="flex gap-2">
              <NavLink to="">
                <li className="text-[13px]">About</li>
              </NavLink>
              <NavLink to="">
                <li className="text-[13px]">Contact</li>
              </NavLink>
              <NavLink to="">
                <li className="text-[13px]">Experience</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <hr className="border-[#b8b8b8a7]" />
        <div className="mt-2">
          <center className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            <span>© {new Date().getFullYear()} </span>
            <NavLink to="">VKD™</NavLink>
          </center>
          <center className=" text-[12px]">
            Developed by ❤️
            <span
              onClick={() => {
                navigation("?type=developer-details");
              }}
              className=" text-sky-600 font-semibold  cursive-font cursor-pointer"
            >
              @VikashKumar
            </span>
          </center>
        </div>
      </footer>
    </>
  );
};

export default Footer;
