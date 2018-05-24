import React from "react";

function ThirdProduct() {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">$74.99</h4>
          <h4><a href="#">Third Product</a>
          </h4>
          <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="ratings">
          <p className="pull-right">31 reviews</p>
          <p>
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star-empty" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdProduct;
