import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      picFull: true
    }
  }

  picToggle = (e) => {
    e.preventDefault();
    // call the alterPic from index.js to set picStyle to current picFull (Boolean)
    this.props.alterPic(this.state.picFull);
    // toggle picFull
    this.setState(prevState => ({
      picFull: !prevState.picFull
    }));
    // console to verify toggling
    console.log(this.state.picFull);
  }

  render() {

    return (<div>
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
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
                <li>
                    <button onClick={this.picToggle}>Push me to change thumbnail effect </button>
                </li>

            </ul>
        </div>

      </div>
    )
  }
}

export default Header;
