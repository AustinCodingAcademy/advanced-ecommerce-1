import React from "react";

function ProductDetail(props) {
  let content = "";
  let productID = "";
  let productName = "";
  let productDesc = "";
  let productPrice = "";
  let productReviews = "";
  let fullStars = "";
  let emptyStars = "";
  let allStars = [];
  if (props.products) {
    content = props.products[0].name;
  }
  if (props.magicNumber) {
    productID = props.magicNumber;
  }

  let foundProduct = props.products.findIndex(function(element){
    //console.log("Element.id: ",element.id);
    return element.id >= productID
  });

  //console.log("magicNumber: ",productID);
  //console.log("foundProduct: ",foundProduct);
  //console.log("Props.Products: ",props.products);
  productName = props.products[foundProduct].name;
  console.log("ProductName: ",props.products[foundProduct].name);
  productDesc = props.products[foundProduct].description;
  //console.log("ProductDesc: ",productDesc);
  productPrice = props.products[foundProduct].price;
  //console.log("ProductPrice: ",productPrice);
  productReviews = props.products[foundProduct].reviews;
  //console.log("productReviews: ",productReviews);
  fullStars = props.products[foundProduct].rating;
  emptyStars = 5 - fullStars;

  for (var i = 0; i < fullStars; i++) {
      allStars.push(<span className="glyphicon glyphicon-star" key={i}></span>);
  }
  for (var i = 0; i < emptyStars; i++) {
      allStars.push(<span className="glyphicon glyphicon-star-empty" key={i+fullStars}></span>);
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt=""/>
            <div className="caption">
                <h4 className="pull-right">{productPrice}</h4>
                <h4><a href="#">{productName}</a>
                </h4>
                <p>{productDesc}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{productReviews} reviews</p>
                <p>{allStars}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail;
