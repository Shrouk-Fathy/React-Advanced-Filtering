import React from "react";
import "./Recommended.css";

export default function Recommended({ handleBtnsClick }) {

  return (
    <>
      <div className="recommended-section">
        <h4>Recommended</h4>
        <div className="recommmended-btns">
          <button
            className="btns"
            onClick={(e) => {
              document.querySelectorAll("button").forEach((btn)=>btn.classList.remove("clicked"));
              e.target.classList.add("clicked");

              document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

              handleBtnsClick("All Products");
            }}
          >
            All Products
          </button>
          <button
            className="btns"
            onClick={(e) => {
              document.querySelectorAll("button").forEach((btn)=>btn.classList.remove("clicked"));
              e.target.classList.toggle("clicked");

              document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

              handleBtnsClick("Nike");
            }}
          >
            Nike
          </button>
          <button
            className="btns"
            onClick={(e) => {
              document.querySelectorAll("button").forEach((btn)=>btn.classList.remove("clicked"));
              e.target.classList.toggle("clicked");

              document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

              handleBtnsClick("Adidas");
            }}
          >
            Adidas
          </button>
          <button
            className="btns"
            onClick={(e) => {
              document.querySelectorAll("button").forEach((btn)=>btn.classList.remove("clicked"));
              e.target.classList.toggle("clicked");

              document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

              handleBtnsClick("Puma");
            }}
          >
            Puma
          </button>
          <button
            className="btns"
            onClick={(e) => {
              document.querySelectorAll("button").forEach((btn)=>btn.classList.remove("clicked"));
              e.target.classList.toggle("clicked");

              document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

              handleBtnsClick("Vans");
            }}
          >
            Vans
          </button>
        </div>
      </div>
    </>
  );
}