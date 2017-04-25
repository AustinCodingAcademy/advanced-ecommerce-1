import React from "react";
import Catagories from "./Catagories";
import Carousel from "./Carousel";
 
 
function Header() {
  return(
    <div className="row">
      <Catagories />
      <Carousel />

    </div>
  );
}

export default Header;