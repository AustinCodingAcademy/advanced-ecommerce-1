import React from "react";
// let props = {product: {price: 22.55,name:"cereal",rating:5}}
//
// ProductDetail(props);

export default function ProductDetail(props) {
    // const products = props.product;
    // console.log("the price is" + "" + product.price);
    // console.log("the rating is" + "" + product.rating);
  //create an array that contains one ProductDetail per product object

  return (

  <div>
  <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
          <img src="http://placehold.it/320x150" alt=""/>
          <div className="caption">
              <h4 className="pull-right">props.product.price</h4>
            <h4><a href="#">{props.product.name}</a>
              </h4>
              <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
          </div>
          <div className="ratings">
              <p className="pull-right">{props.product.reviews}</p>
              <p>
                  <span className="glyphicon glyphicon-star">props.product.rating</span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
              </p>
          </div>
      </div>
  </div>
</div>
);
}
