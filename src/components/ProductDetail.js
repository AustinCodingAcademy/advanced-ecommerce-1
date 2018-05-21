import React from "react";
import "../App.css";

function ProductDetail(props) {
  // console.log(props);

  const determineStars = () => {
    const stars = [];
    for (let index = 0; index < props.product.rating; index++) {
      stars.push(<span className="glyphicon glyphicon-star" />);
    }
    for (let index = 0; index < 5 - props.product.rating; index++) {
      stars.push(<span className="glyphicon glyphicon-star-empty" />);
    }
    return stars.map((star) => {
      return star;
    });
    
  };
  

  
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.product.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.product.price}</h4>
          <h4><a href="#">{props.product.name}</a>
          </h4>
          <p>{props.product.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.product.reviews} reviews</p>
          <p>
            {determineStars()}
          </p>
        </div>
      </div>
    </div>
  );

}

export default ProductDetail;
