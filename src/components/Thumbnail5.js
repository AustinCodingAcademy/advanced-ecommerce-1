import react from "react"

function Thumbnail5() {
    var React = require("react"); // eslint-disable-line no-unused-vars
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
              <img src="http://placehold.it/320x150" alt=""/>
              <div className="caption">
                  <h4 className="pull-right">$94.99</h4>
                  <h4><a href="#">Fifth Product</a>
                  </h4>
                  <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="ratings">
                  <p className="pull-right">18 reviews</p>
                  <p>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
              </div>
          </div>
      </div>
  );
}
export default Thumbnail5;
