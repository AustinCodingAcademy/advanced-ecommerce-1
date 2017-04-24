import React from "react";


function ProductDetail(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.price}</h4>
          <h4><a href="#">{props.name}</a>
          </h4>
          <p>{props.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.reviews}</p>
          <p>
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

export default ProductDetail;
