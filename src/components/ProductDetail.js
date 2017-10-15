import React from 'react';

const ProductDetail = props => {
  const rating = [];
  for (let i = 0; i < props.product.rating; i++) {
    rating.push(<span key={i} className="glyphicon glyphicon-star" />);
  }
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt="" />
        <div className="caption">
          <h4>
            <a href="#">{props.product.name}</a>
          </h4>
          <h4 className="center">{props.product.price}</h4>
          <p>{props.product.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product.reviews}</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
