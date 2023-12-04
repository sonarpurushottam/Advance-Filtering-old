import React from "react";
import Button from "../components/Buttons";
import "./Recommended.css";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div class="recommended-flex">
          <button
            class="icon facebook"
            onclick="handleClick()"
            title="All Products"
          >
            All Products
          </button>
          <button
            class="icon twitter"
            onclick="handleClick('Nike')"
            title="Nike"
          >
            Nike
          </button>
          <button
            class="icon instagram"
            onclick="handleClick('Adidas')"
            title="Adidas"
          >
            Adidas
          </button>
          <button
            class="icon github"
            onclick="handleClick('Puma')"
            title="Puma"
          >
            Puma
          </button>
          <button
            class="icon youtube"
            onclick="handleClick('Vans')"
            title="Vans"
          >
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
