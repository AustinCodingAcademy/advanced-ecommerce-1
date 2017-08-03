import React from "react";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>
        )
    }
}

export default Header;