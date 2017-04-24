import React from 'react';

class Productz extends React.Component {
	
console.log("in render", this.props);
const products = this.props;
console.log("products", products.props.products);
const ProductList = products.props.products.map(function (product, index) {
  const stars = function () {
    if (product.rating === 5) {
      return (
        <p>
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
        </p>
      );
    } else if (product.rating === 4) {
      return (
        <p>
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
        </p>
      );
    } else if (product.rating === 3) {
      return (
        <p>
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
        </p>
      );
    } else if (product.rating === 2) {
      return (
        <p>
          <span className="glyphicon glyphicon-star" />
          <span className="glyphicon glyphicon-star" />
        </p>
      );
    } 
    return (
      <p>
        <span className="glyphicon glyphicon-star" />
      </p>
    );
				
  };
  return (
    <div className="row">
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src="http://placehold.it/320x150" alt="" />
          <div className="caption">
            <h4 className="pull-right">{product.price}</h4>
            <h4><a href="#">{product.name}</a>
            </h4>
            <p>{product.description}</p>
          </div>
          <div className="ratings">
            <p className="pull-right">{product.reviews}</p>
            {stars}
          </div>
        </div>
      </div>
    </div>
  );
});
console.log("prodcut list", ProductList);
	render () {
		return (
		
		)
	}
}

export defaul Productz;
