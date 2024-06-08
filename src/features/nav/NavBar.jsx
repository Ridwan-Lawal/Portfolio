import Button from "../../ui/Button";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { useNavFixed } from "../../hooks/useNavFixed";

function NavBar() {
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const isNavFixed = useNavFixed();

  return (
    <nav
      className={`z-50 transition-all ${
        isNavFixed
          ? "fixed w-full shadow-lg bg-[rgb(1,6,10)] py-6 md:py-4"
          : "static py-7"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap max-w-[1220px]  px-10  mx-auto">
        <section className="z-50 ">
          <img src="/assets/icons/logo2.svg" className="w-[53px] md:w-14 " />
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
          className={` bg-[#030205] z-10 fixed md:static left-0 h-screen  flex gap-9 nav-items overflow-hidden flex-col md:flex-row justify-center transition-all md:w-fit md:h-fit md:bg-transparent duration-650 items-center ${
            menuIsClicked ? "w-full px-6" : "w-0 px-0"
          } top-0`}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (link, id) => (
              <li key={id}>
                <a
                  onClick={() => setMenuIsClicked(false)}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            )
          )}
          <a
            href="/assets/CV-Ridwan.pdf"
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
