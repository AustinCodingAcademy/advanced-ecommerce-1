import React from 'react';
import '../index.css';

const ProductDetail = (props) => {
  const products= props.products;
  const renderProduct = () => {
    return (
      products.map((product) => {
        return (
          <div className="col-sm-4 col-lg-4 col-md-4" key={product.id}>
            <div className="thumbnail">
              <img src={product.imgUrl} alt="" />
              <div className="caption">
                  <h4 className="pull-right">{product.price}</h4>
                  <h4><a href="#">{product.name}</a>
                  </h4>
                  <p>{product.description}</p>
              </div>
              <div className="ratings">
                  <p className="pull-right">{product.reviews}</p>
                  <p>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                  </p>
              </div>
              <button onClick={props.handleClick}>Add to Cart</button>
            </div>
          </div>
        );
      })
    );
  };
  return (
    <div className="products">
      {renderProduct()}
    </div>
  );
};

export default ProductDetail;
