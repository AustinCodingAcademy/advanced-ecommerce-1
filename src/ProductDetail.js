import React from "react";

function ProductDetail(props) {

  let allStars = [];

  function stars(num){
    let fullStars = num;
    let emptyStars = 5 - fullStars;
    let allStars = [];
    for (var i = 0; i < fullStars; i++) {
        allStars.push(<span className="glyphicon glyphicon-star" key={i}></span>);
    }
    for (var i = 0; i < emptyStars; i++) {
        allStars.push(<span className="glyphicon glyphicon-star-empty" key={i+fullStars}></span>);
    }
    return allStars;
  }

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src={props.prod.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.prod.price}</h4>
                <h4><a href="#">{props.prod.name}</a>
                </h4>
                <p>{props.prod.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.prod.reviews} reviews</p>
                <p>{stars(props.prod.rating)}</p>
            </div>
            <button onClick={()=>{
              props.increase();
            }}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetail;
