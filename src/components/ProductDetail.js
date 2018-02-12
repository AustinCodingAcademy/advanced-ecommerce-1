import React, { Component } from 'react';

function ProductDetail(props) {

    let stars = Array(props.product.rating)
    .fill(<span className="glyphicon glyphicon-star"></span>)
    .concat(Array(5 - props.product.rating)
    .fill(<span className="glyphicon glyphicon-star-empty"></span>));

    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.product.imgUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4 className="product-name"><a href="#">{props.product.name}</a>
                    </h4>
                    <p>{props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        {stars.map(function(element) {
                            return element}
                        )}
                    </p>
                </div>
                <button onClick={()=>{props.increaseCart(props.product.id);}} type="button">Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;