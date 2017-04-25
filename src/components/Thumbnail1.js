import react from "react"

function Thumbnail1() {
    var React = require("react"); // eslint-disable-line no-unused-vars
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
              <img src="http://placehold.it/320x150" alt=""/>
              <div className="caption">
                  <h4 className="pull-right">$24.99</h4>
                  <h4><a href="#">First Product</a>
                  </h4>
                  <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
              </div>
              <div className="ratings">
                  <p className="pull-right">15 reviews</p>
                  <p>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                  </p>
              </div>
          </div>
      </div>
  );
}
export default Thumbnail1;
