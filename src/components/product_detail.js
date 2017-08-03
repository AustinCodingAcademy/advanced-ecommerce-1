import React from 'react';

const ProductDetail = ({product}) => {
  // console.log(State.products[0].price);
  // console.log(props)
  const lis = [];
  let rating = product.rating;

  for (let i = 0; i < rating; i++) {
    lis.push(<span className="glyphicon glyphicon-star"></span>);
  }
  for (let i = 0; i < 5 - rating; i++) {
    lis.push(<span className="glyphicon glyphicon-star-empty"></span>);
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={product.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{product.price}</h4>
          <h4><a href="#">{product.name}</a>
          </h4>
          <p>{product.description}.</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{product.reviews} reviews</p>
          <p>
            {lis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
