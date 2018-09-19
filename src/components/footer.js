import React from 'react';

export default class Footer extends React.Component {
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
    )
  }
}