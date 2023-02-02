import React from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
function ToTop() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 950) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  return (
    <div>
      {toTop && (
        <div>
          <Link
            to="home"
            smooth
            duration={500}
            className=" text-white w-fit px-3 py-3  rounded-md bg-gradient-to-r from-yellow-500 to-red-500 cursor-pointer fixed left-[88%] top-[95%] animate-pulse lg:left-[95%]  lg:top-[93%]"
          >
            <FaArrowUp />
          </Link>
        </div>
      )}
    </div>
  );
}

export default ToTop;
