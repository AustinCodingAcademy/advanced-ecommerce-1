
import React from "react";
import "../App.css";
import sendCart from "./postOrder";

function Header(props) {

  const sendOrder = (data) => {
    sendCart.order(data);
  };

  return (

    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
      
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">Start Bootstrap</a>
        </div>
      
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li >
              <a href="#">Items In Cart ({props.count})</a>
            </li>
            <li >
              <button style={{marginTop: "12px"}} onClick={() => sendOrder(props.cart)}> Checkout </button>
            </li>
          </ul>
        </div>
     
      </div>
  
    </nav>

  );

}

export default Header;
