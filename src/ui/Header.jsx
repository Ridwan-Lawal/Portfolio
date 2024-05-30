import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Header() {
  const typeEl = useRef(null);

  //   add hero
  //

  useEffect(
    function () {
      const curTypeEl = typeEl.current;

      const typed = new Typed(curTypeEl, {
        strings: ["Hello there, I&apos;m Lawal Ridwan"],
        typeSpeed: 50,
        showCursor: true,
        cursor: "|",
        autoInsertCss: true,
      });

      return () => {
        typed.destroy();
      };
    },
    [typeEl]
  );

  return (
    <header className="mt-5 md:mt-8 lg:mt-0 max-w-[1150px] px-12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 flex-col  md:flex-row   justify-between">
      <div className=" max-w-[600px]  order-2 text-center md:text-left md:order-1 space-y-4">
        <span
          ref={typeEl}
          className="text-white  text-[29px] md:text-4xl xl:text-[42px] inline font-semibold font-merriweather md:leading-[1.5]"
        />

        <p className="text-gray-100 font-medium  leading-[1.8] md:text-lg  -mt-4 md:-mt-1 ">
          I&apos;m a front-end developer skilled in building beautiful and
          functional user interfaces. I enjoy working on projects that utilize
          front-end technologies to create seamless user experiences.
        </p>
      </div>
      <div className=" order-1 md:order-2  ">
        <img src="/assets/icons/hero.svg" alt="" className="w-full" />
      </div>
    </header>
  );
}

export default Header;
