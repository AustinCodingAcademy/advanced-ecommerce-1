import React from "react";
import Carousel from "./Carousel";
// import Productz from "./Productz";



class ProductDetail extends React.Component {
//  constructor(props) {
//    super(props);
//    const initProps = props.props;
//    console.log("initProps", initProps);
//    const propsArray = initProps.products;
//    console.log("propsArray", propsArray);
//    console.log("products id", props.props.products[0]);
// //    const propsMap = propsArray.map(function (product, index) {
// //      return {
// //        id: props.id,
// //      };
// //    });
// //    this.state = {
// //      id: this.products.id,
// //    };
// //    const userDivs = props.products.map(function (user, index) {
// //      return {
// //        id: props.id,
// //				name: props.name,
// //				
// //      };
// //    });
// //		<div key={index}>{users.first_name}</div>;
//  }
  render(props) {
    
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
      console.log("stars", stars);
      return (
          <div className="col-sm-4 col-lg-4 col-md-4 key={index}">
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

