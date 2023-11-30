import React from "react";
import Nav from "./navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

const App = () => {
  return (
    <>
      <Nav />
      <Products />
      <Recommended />
    </>
  );
};

export default App;
