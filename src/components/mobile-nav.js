import React, { useState } from "react";
import { Link } from "gatsby";

const MobileNav = () => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  function renderMobileNav() {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-10 flex items-center justify-center bg-blue-800">
        <button
          className="fixed top-0 right-0 text-white m-5 text-xl"
          onClick={toggle}
        >
          ✕
        </button>
        <nav className="text-white flex flex-col items-center text-xl">
          <Link to="/about/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/contact/">Contact</Link>
        </nav>
      </div>
    );
  }
  return (
    <>
      <button onClick={toggle}>
        <div className="text-2xl">🍔</div>
      </button>

      {isToggledOn ? renderMobileNav() : null}
    </>
  );
};

export default MobileNav;
