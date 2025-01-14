import { useState, useEffect } from "react";

export const useCategories = (categoryLists) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1350);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const firstCategories = isMobile ? categoryLists.slice(0, -3) : categoryLists;
  const lastCategories = isMobile ? categoryLists.slice(-3) : [];

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return {
    isMobile,
    showMore,
    toggleShowMore,
    firstCategories,
    lastCategories,
  };
};
