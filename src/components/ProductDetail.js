import React from 'react';

function ProductDetail(props) {

const ratings = [];
for (let i =0; i < 5; i++) {
  if (i < props.product.rating) {
    ratings.push(<span key={i} className="glyphicon glyphicon-star"></span>)
  } else {
    ratings.push(<span key={i} className="glyphicon glyphicon-star-empty"></span>)
  }
}

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={props.product.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.product.price}
                </h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews}</p>
                <p>
                    {ratings}
                </p>
            </div>
        </div>
    </div>
  );
}
export default ProductDetail;
