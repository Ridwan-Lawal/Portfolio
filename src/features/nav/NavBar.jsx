import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

function NavBar() {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  return (
    <nav className="">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap max-w-[1220px] py-7 px-10  mx-auto">
        <section className="z-50 ">
          <img
            src="/assets/icons/logo2.svg"
            alt=""
            className="w-[53px] md:w-14 "
          />
        </section>

        <section
          onClick={() => setMenuIsClicked((curState) => !curState)}
          className={`text-white  text-[25px] md:text-3xl cursor-pointer w-fit  ${
            menuIsClicked ? "rotate-180" : "rotate-0"
          } transition-transform md:hidden duration-300 z-50`}
        >
          {menuIsClicked ? <HiMiniXMark /> : <RiMenu4Fill />}
        </section>

        <ul
          className={` bg-gray-950 fixed md:static left-0 h-screen  flex gap-9 nav-items overflow-hidden flex-col md:flex-row justify-center transition-all md:w-fit md:h-fit md:bg-transparent duration-650 items-center ${
            menuIsClicked ? "w-full px-6" : "w-0 px-0"
          } top-0`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#techstack">Tech Stack</a>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <a
            href="/public/assets/CV-Ridwan.pdf"
            download="CV-Ridwan.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume</Button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
