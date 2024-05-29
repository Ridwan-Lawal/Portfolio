import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { HiMiniBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

function NavBar() {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  return (
    <nav className="border p-5 flex items-center justify-between flex-wrap">
      <div>
        <section className="z-50 border">
          <img src="/assets/icons/logo2.svg" alt="" className="w-12 md:w-14 " />
        </section>

        <section
          onClick={() => setMenuIsClicked((curState) => !curState)}
          className={`text-white border text-xl md:text-3xl cursor-pointer w-fit  ${
            menuIsClicked ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 z-50`}
        >
          {menuIsClicked ? <HiMiniXMark /> : <HiMiniBars3BottomLeft />}
        </section>

        <ul
          className={`border bg-gray-950 fixed left-0 h-screen  flex gap-9 nav-items overflow-hidden flex-col md:flex-row justify-center transition-all duration-650 items-center ${
            menuIsClicked ? "w-full px-6" : "w-0 px-0"
          } top-0`}
        >
          <li>
            <NavLink to="/home">Home</NavLink>
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

          <Button>Resume</Button>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
