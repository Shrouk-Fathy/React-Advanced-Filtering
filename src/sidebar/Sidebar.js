import React from "react";
import "./Sidebar.css";
import { AiFillShop } from "react-icons/ai";
import Category from "./category/Category.js";
import Colors from "./colors/Colors.js";
import Price from "./price/Price.js";

export default function Sidebar({ handleRadioInput }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h2>
          <AiFillShop />
        </h2>
        <Category handleRadioInput={handleRadioInput} />
        <Colors handleRadioInput={handleRadioInput} />
        <Price handleRadioInput={handleRadioInput} />
      </div>
    </section>
  );
}
