import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Switch,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { VikashKumar } from "./Icons/VikashKumar.tsx";
import { SunIcon } from "./Icons/SunIcon.tsx";
import { MoonIcon } from "./Icons/MoonIcon.tsx";
import DownArrow from "./Icons/DownArrow.tsx";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const menuItems = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Projects",
    "Skills",
    "Experience",
    "Education",
    "Blog",
    "Certifications",
    "Testimonials",
    "Publications",
  ];
  const skillsMenuItems = [
    { Link: "/html", Text: "HTML" },
    { Link: "/css", Text: "CSS" },
    { Link: "/javascript", Text: "JavaScript" },
    { Link: "/nextjs", Text: "Next JS" },
    { Link: "/reactjs", Text: "React JS" },
    { Link: "/nodejs", Text: "Node JS" },
    { Link: "/expressjs", Text: "Express JS" },
    { Link: "/mongodb", Text: "MongoDB" },
    { Link: "/java", Text: "Java" },
    { Link: "/cpp", Text: "C++" },
    { Link: "/c", Text: "C" },
    { Link: "/python", Text: "Python" },
    { Link: "/typescript", Text: "TypeScript" },
    { Link: "/tailwindcss", Text: "Tailwind CSS" },
    { Link: "/dsa", Text: "Data Structures and Algorithms" },
    { Link: "/skills", Text: "All Skills" },
  ];
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-[#000000] dark:text-[#FFFFFF]"
        />
      </NavbarContent>
      <NavbarContent justify="center" className="lg:hidden">
        <NavbarBrand>
          <NavLink
            to="/"
            className=" text-[#000000] flex justify-center items-center dark:text-[#FFFFFF]"
          >
            <VikashKumar />
            <p className="font-bold text-inherit">VIKASHKUMAR</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="start" className="max-lg:hidden">
        <NavbarBrand>
          <NavLink
            to="/"
            className=" text-[#000000] flex justify-center items-center dark:text-[#FFFFFF]"
          >
            <VikashKumar />
            <p className="font-bold text-inherit">VIKASHKUMAR</p>
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            color="foreground"
            className=" text-sm font-bold"
            to="/about"
          >
            About
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            className=" text-sm  font-bold"
            color="foreground"
            to="/contact"
          >
            Contact
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="border-none text-sm flex justify-center items-center font-bold dark:hover:bg-[#111010] hover:bg-[#e3e3e3df] outline-none"
              >
                Skills
                <DownArrow />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className=" text-[#000000] dark:text-[#FFFFFF]"
            >
              {skillsMenuItems.map((item, index) => (
                <DropdownItem className=" w-full" key={`${item.Text}-${index}`}>
                  <NavLink
                    color="foreground"
                    className=" text-sm  w-full"
                    to={item.Link}
                  >
                    {item.Text}
                  </NavLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            className=" text-sm font-bold "
            color="foreground"
            to="/projects"
          >
            Projects
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            className=" text-sm  font-bold"
            color="foreground"
            to="/experience"
          >
            Experience
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            className=" text-sm  font-bold"
            color="foreground"
            to="/education"
          >
            Education
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            isSelected={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            size="sm"
            color="success"
            startContent={<SunIcon props={{}} />}
            endContent={<MoonIcon props={{}} />}
          ></Switch>
        </NavbarItem>
        <NavbarItem className="max-sm:hidden">
          <Button
            as={NavLink}
            className="max-sm:hidden rounded-[2rem]"
            color="primary"
            href="#"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className=" text-[#000000] dark:text-[#FFFFFF]"
          >
            <NavLink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-sm "
              to="/"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <Button
            as={NavLink}
            className="w-[150px] mt-5"
            color="primary"
            href="#"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
