import React from "react";

function FirstProduct(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.product[0].imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.product[0].price}</h4>
          <h4><a href="#">{props.product[0].name}</a>
          </h4>
          <p>{props.product[0].description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product[0].reviews} reviews</p>
          <p>
            {/* need to make function to display stars */}
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
            <span className="glyphicon glyphicon-star" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstProduct;
