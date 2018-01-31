import React from "react";

function ProductDetail(props) {

  function stars(num) {
    let arr = [];
    for (let i = 1; i < num + 1; i++) {
      arr.push(<span className="glyphicon glyphicon-star" key={i} />);
    }
    return arr;
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.prod.imgUrl} alt="" />
        <div className="caption">
          <h4 className="pull-right">{props.prod.price}</h4>
          <h4><a href="#">{props.prod.name.length > 13 ? props.prod.name.substring(0, 14) + "..." : props.prod.name}</a>
          </h4>
          <p>{props.prod.description}</p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.prod.reviews} reviews</p>
          <p>
            {stars(props.prod.rating)}
          </p>
          <button
          onClick={
            ()=>{
              props.addItemToCart();
            }
          }
          
          >Add Item To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
