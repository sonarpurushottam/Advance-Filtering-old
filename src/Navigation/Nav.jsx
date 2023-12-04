import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="input-container">
        <div className="search-wrapper">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search"
            className="search-input"
          />
          <BiSearch className="search-icon" />
        </div>
      </div>

      {/* <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>  */}
    </nav>
  );
};

export default Nav;
