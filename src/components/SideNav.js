import React from "react";
// import "./App.css";

function SideNav (props) {
  let NavBar = props.NavBar;
  return (
    <div className="col-md-3">
        <p className="lead">Shop Name</p>
        <div className="list-group">
            <a href="#" className="list-group-item">Category 1</a>
            <a href="#" className="list-group-item">Category 2</a>
            <a href="#" className="list-group-item">Category 3</a>
        </div>
    </div>
);
}

export default SideNav;
