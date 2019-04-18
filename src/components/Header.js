import React from "react";
import Herotext from "./Herotext";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <header>
        <Navbar />
        <Herotext />
      </header>
    </div>
  );
}

export default Header;
