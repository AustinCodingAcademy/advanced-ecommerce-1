import React from 'react';

function ProductDetail(props) {
  console.log(props);
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
                {stars(props.product.rating)}
            </div>
        </div>
    </div>
  );
}

function stars(r) {
  const starRating = [];
  for (var i = 1; i <= 5; i++) {
    if (r >= i) {
      starRating.push(<span className="glyphicon glyphicon-star"></span>)
    } else {
    starRating.push(<span className="glyphicon glyphicon-star-empty"></span>)
    }
  }
  return starRating
}


export default ProductDetail;
