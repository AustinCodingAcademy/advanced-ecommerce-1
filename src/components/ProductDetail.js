import React, { Component } from 'react';

function ProductDetail(props) {
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.imgUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{props.price}</h4>
                    <h4><a href="#">{props.id}</a>
                    </h4>
                    <p>{props.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.reviews} reviews</p>
                    <p>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;