import React from "react";

function stars(num) {
  let arr = [];
  for (let i = 1; i < num + 1; i++) {
    arr.push(<span className="glyphicon glyphicon-star" key={i} />);
  }
  return arr;
}

function ProductDetail(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.prod.products[props.index].imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.prod.products[props.index].price}</h4>
          <h4><a href="#">{props.prod.products[props.index].name.length > 13 ? props.prod.products[props.index].name.substring(0, 14) + "..." : props.prod.products[props.index].name}</a>
          </h4>
          <p>{props.prod.products[props.index].description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.prod.products[props.index].reviews} reviews</p>
          <p>
            {stars(props.prod.products[props.index].rating)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
