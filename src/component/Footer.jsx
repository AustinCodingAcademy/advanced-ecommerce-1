
'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
    <div className="container">
        <hr/> 
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; My Homework 2017</p>
                </div>
            </div>
        </footer>
    </div>
    );
  }
}

module.exports = Footer;
