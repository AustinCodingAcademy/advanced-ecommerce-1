import React, { Component } from 'react';

function ProductDetail(props){
  let starRating = [];
  for (var i = 0; i < props.product.rating; i++) {
    starRating.push(<span className="glyphicon glyphicon-star"></span>)
  }






  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="props.products.imgUrl" alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews}
                </p>
                <p>{starRating}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail;
