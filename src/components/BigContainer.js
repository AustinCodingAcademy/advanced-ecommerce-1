import React from "react";
import SideBar from "./SideBar";
import ContentDisplay from "./ContentDisplay";

function BigContainer() {
  return (
    <div className="container">
      <div className="row">
        <SideBar />
        <ContentDisplay />
      </div>
    </div>
  );
}

export default BigContainer;
