// BackToTopButton.js
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 bg-[#F2C572] p-2 md:p-4 rounded-full shadow-md 
      transition-all duration-1000 ${
        scrollY > 100 ? "opacity-100 scale-110" : "opacity-0 scale-0"
      } hover:bg-[#f2c5729a] `}
      onClick={scrollToTop}  
    >
      <FaArrowUp className="text-white md:w-6 md:h-6 w-3 h-3" />
    </button>
  );
};

export default BackToTopButton;
