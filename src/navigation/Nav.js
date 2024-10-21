import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineUserAdd } from "react-icons/ai";

export default function Nav({handleInputChange}) {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineShopping className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
}
