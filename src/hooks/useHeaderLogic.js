import { useEffect, useRef, useState } from "react";

const useHeaderLogic = () => {
  const [scroll, setScroll] = useState(false);
  const [selectSearch, setSelectSearch] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setSelectSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    scroll,
    selectSearch,
    setSelectSearch,
    headerRef,
  };
};

export default useHeaderLogic;
