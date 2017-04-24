import React from "react";



class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log("contructor", props);
//		this.props = {
//			name: this.user.name,
//		}
  }
  render() {
    return (
      <div className="container">
        <hr />
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
