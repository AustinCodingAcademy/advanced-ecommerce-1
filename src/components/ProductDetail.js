//This component renders the product detail.  Called from App.js.
import React from 'react';

function ProductDetail(props) {

  const product = props.product;

  let ratingArr = [];
  for (let i=0; i<5; i++) {
    if (i<product.rating) {
      ratingArr.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    } else {
      ratingArr.push(<span key={i} className="glyphicon glyphicon-star-empty"></span>);
    }
  }

return (
  <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
          <img src={product.imgUrl} alt={product.name}/>
          <div className="caption column">
              <h4 className="pull-right">{product.price}</h4>
              <h4><a href="#">{product.name}</a>
              </h4>
              <p>{product.description}</p>
          </div>
          <div className="ratings">
              <p className="pull-right">{product.reviews} reviews</p>
              <p>
                {ratingArr}
              </p>
          </div>
      </div>
  </div>
);

}

export default ProductDetail;
