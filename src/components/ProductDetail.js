import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.product.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.product.price}</h4>
          <h4><a href="#">{props.product.name}</a>
          </h4>
          <p>{props.product.description}</p>
        </div>
        <div className="add-button">
          <button>Add to cart</button>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product.reviews} reviews</p>
          <p>
            {/* need to turn this into a loop */}
            {props.product.rating}
            <span className="glyphicon glyphicon-star" />
          </p>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;
