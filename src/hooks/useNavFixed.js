import { useEffect, useState } from "react";

export function useNavFixed() {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(function () {
    function onScroll() {
      if (window.scrollY >= 300) setIsNavFixed(true);
      else setIsNavFixed(false);
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isNavFixed;
}
