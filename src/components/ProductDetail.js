import React from "react";
import Carousel from "./Carousel";
const _ = require("lodash");


class ProductDetail extends React.Component {
  render() {
    const paper = this.props;
    const ProductList = paper.props.products.map(function (product, index) {
			// cannot figure out how to give these keys without it throwing errors in the code.
      const initialRatings = [
        <span key={index + product.id + "a"} className="glyphicon glyphicon-star" />,
        <span key={index + product.id + "b"} className="glyphicon glyphicon-star" />,
        <span key={index + product.id + "c"} className="glyphicon glyphicon-star" />,
        <span key={index + product.id + "d"} className="glyphicon glyphicon-star" />,
        <span key={index + product.id + "e"} className="glyphicon glyphicon-star" />
      ];
      const notEmptyRating = <span className="glyphicon glyphicon-star-empty" />;
      const filledRating = _.fill(initialRatings, notEmptyRating, product.rating, initialRatings.length);

			
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
              {filledRating}
            </div>
          </div>
        </div>
      );
    });
    console.log("prodcut list", ProductList);
    return ( 
      <div className="container">
				
        <div className="row">

          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>

          <div className="col-md-9">

            <Carousel />

            <div className="row">

              {ProductList}

            </div>

          </div>

        </div>
				
      </div>
			
    );
  }
}

export default ProductDetail;
