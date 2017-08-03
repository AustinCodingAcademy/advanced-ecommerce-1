import React from "react";

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright &copy; Your Website 2014</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;