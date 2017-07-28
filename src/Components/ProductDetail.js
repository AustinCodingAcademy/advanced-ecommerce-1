import React from "react";
import Stars from './Stars';


function ProductDetail(props) {
  const products = props.product.products;
  return (
    <div>
      {products.map((product, i) =>
        <div key={i} className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
            <img src={product.imgUrl} alt="" />
            <div className="caption">
              <h4 className="pull-right">{product.price}</h4>
              <h4><a href="#">{product.name}</a></h4>
              <p>{product.description}</p>
            </div>
            <div className="ratings">
              <p className="pull-right">{product.reviews} Reviews</p>
              <p>
                <Stars rating={product.rating} />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
