import React from "react";

function Header(){
    return (<nav className="navbar" role="navigation">
        <div className="navbar-inner flex flex-wrap justify-between items-center px3 py2">
          
            <h1 className="logo m0 fz3 white md-down-col-12 md-down-mb2">Randomazon</h1>
          
            <div className="navbar-items mxn1 myn1 md-down-col-12">
                <a className="btn btn-primary fzn1 m1" href="#">About</a>
                <a className="btn btn-primary fzn1 m1" href="#">Services</a>
                <a className="btn btn-primary fzn1 m1" href="#">Contact</a>
            </div>
         
        </div>
      
    </nav>
  )
}

export default Header;