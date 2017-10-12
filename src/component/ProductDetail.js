import React, {Component} from 'react';

export default function ProductDetail(props) {

  const ratings = [];
  for (let i = 0; i < props.products.rating; i++) {
    ratings.push(<span className="glyphicon glyphicon-star" />)
  }
  for (let i = 0; i < 5 - props.products.rating; i++) {
    ratings.push(<span className="glyphicon glyphicon-star-empty"></span>)
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.products.imgUrl} className="img-thumbnail" alt=""/>
        <div className="caption">
          <h4 className="pull-right">{props.products.price}</h4>
          <h4>
            <a href="#">{props.products.name}</a>
          </h4>
          <p>{props.products.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.products.reviews} Reviews</p>
          <p>
            {ratings}
          </p>
        </div>
      </div>
    </div>
  );
}
