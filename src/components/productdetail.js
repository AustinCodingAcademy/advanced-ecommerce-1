import React from "react";
import Stars from "./stars";

function ProductDetail(props) {
    return(
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
                <p className="pull-right">{props.product.reviews} reviews</p>
                <Stars rating={props.product.rating} />
            </div>
            <button onClick={ function() {
                props.increaseCart();
            }} className="btn btn-primary"><span className="glyphicon glyphicon-shopping-cart"></span> Add to Cart</button>
        </div>
    </div>
    );
}

export default ProductDetail;