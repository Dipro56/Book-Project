import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" class="brand-logo center">
            Book Finder
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">       
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
