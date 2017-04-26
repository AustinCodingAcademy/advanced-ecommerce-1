import React from "react";



function fillStars(value){
  var arr=[];
  for (var i=0; i<value; i++){
    arr.push(<span className="glyphicon glyphicon-star"></span>)
  }
  return arr;
};

function ProductDetail(props){


let state = props.state


let productDivs = state.map(function(product, index){

  return (
  <div key={index}>
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
          <img src={product.imgUrl} alt="" className="size"/>
          <div className="caption">
              <h4 className="pull-right">{product.price}</h4>
              <br />
              <h4 className="title"><a href="#">{product.name}</a>
              </h4>
              <p>{product.description}</p>
          </div>
          <div className="ratings">
              <p className="pull-right">{product.reviews} Reviews</p>
              <p>
                {fillStars(product.rating)}
              </p>
          </div>
      </div>
    </div>
  </div>)
});

  return(
    <div className="row">

    {productDivs}
        <div className="col-sm-4 col-lg-4 col-md-4">
            <h4><a href="#">Like this template?</a>
            </h4>
            <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
            <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
        </div>

    </div>
  );
}

export default ProductDetail;
