import React from "react";
import Button from "../components/Buttons";
import "./Recommended.css";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div class="recommended-flex">
          <Button
            className="all-products"
            onClickHandler={handleClick}
            value=""
            title="All Products"
          />
          <Button
            className="nike"
            onClickHandler={handleClick}
            value="Nike"
            title="Nike"
          />
          <Button
            className="adidas"
            onClickHandler={handleClick}
            value="Adidas"
            title="Adidas"
          />
          <Button
            className="puma"
            onClickHandler={handleClick}
            value="Puma"
            title="Puma"
          />
          <Button
            className="vans"
            onClickHandler={handleClick}
            value="Vans"
            title="Vans"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
