import React, { Component } from 'react';

function ProductDetail (props){
  // let rating = <span className="glyphicon glyphicon-star"></span> * props.product.rating;  returns NaN
  function reviewStars(props) {
    let stars = [];
    for(let i= 0; i < props.product.rating; i++) {
      stars.push(<span className="glyphicon glyphicon-star"></span>);
    }
    return (
      <div>{stars}</div>
    );
  };
  return (
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
                <p className="pull-right">{props.product.reviews}</p>
                {reviewStars(props)}

            </div>
        </div>
    </div>

  )
}

export default ProductDetail;
