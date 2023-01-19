import React, { useState } from "react"

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="w-full font-poppins">
      <div className={"navbar " + (color ? "bg-blue-primary" : "bg-none")}>
        <div className="flex flex-row h-16 text-center text-xl items-center justify-center text-white">
          <div className="font-semibold">Agenda VCON</div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;