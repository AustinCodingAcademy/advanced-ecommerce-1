import React from "react";

function FourthProduct() {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">$84.99</h4>
          <h4><a href="#">Fourth Product</a></h4>
          <p>This is a short description. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit.</p>
        </div>
        <div className="ratings">
          <p className="pull-right">6 reviews</p>
          <p>
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star-empty" />
            <span className="glyphicon glyphicon-star-empty" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthProduct;
