import React from "react";

function ProductDetail(props){

  const starSystem = () => {
  const argument = props.products.rating;
  let arr = [];
  for (let i = 0; i < argument; i++) {
    arr.push(<span className="glyphicon glyphicon-star" key={i} ></span>);
  }
  return arr;
};

  return(
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.products.imgUrl} alt=""/>
        <div className="caption">
          <h4 className="pull-right">{props.products.price}</h4>
          <h4><a href="#">{props.products.name}</a>
          </h4>
          <p>{props.products.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp-http://bootsnipp.com</a>
          </p>
          <div>

          </div>

        </div>
        <div className="ratings">
          <p className="pull-right">{props.products.reviews}</p>
          <p>
            {/*<button id="addToCart">Add To Cart</button>*/}
            {starSystem}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;
