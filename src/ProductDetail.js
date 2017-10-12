import React from "react";
import ReactDOM from "react-dom";
import "./state";



function ProductDetail(props){

  let ratings = [];

  for(let i=0; i<props.product.rating; i++){
    ratings.push(<span className="glyphicon glyphicon-star"></span>)
  }

  return(
    <div className="col-sm-4 col-lg-4 col-md-4">
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
                <p>
                    {ratings}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail;
