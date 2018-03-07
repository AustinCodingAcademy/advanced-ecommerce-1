import React from "react";
import { times } from "lodash";

function ProductDetail(props){ 

let ratings = [];

for (let i = 0; i < props.product.rating-1; i++){
    ratings.push(<span className="glyphicon glyphicon-star"></span>)    
}

console.log(props.product);
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>{props.product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews}</p>
                <p>
                    <span className="glyphicon glyphicon-star">{ratings}</span>
                </p>
            </div>
        </div>
    </div>
    )
}

export default ProductDetail;