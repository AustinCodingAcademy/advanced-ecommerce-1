import React from "react";
import Rating from "./Rating";

function ProductDetail(props) {

  return (
      <div className="row">
        <div className="col-sm-4 col-lg-4 col-md-4" key={props.product.id}>
          <div className="thumbnail">
            <img src={props.product.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews} reviews</p>

                  <Rating rating={props.product.rating} />

            </div>
          </div>
        </div>
      </div>
    );
  }

export default ProductDetail;
