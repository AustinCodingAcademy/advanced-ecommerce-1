import React from "react";
// import "./App.css";

function Footer (props) {
  let Footer = props.Footer;
  return (
    <footer>
        <div className="row">
            <div className="col-lg-12">
                <p>Copyright &copy; Your Website 2014</p>
            </div>
        </div>
    </footer>
);
}

export default Footer;
