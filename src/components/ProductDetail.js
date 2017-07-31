import React from 'react';

function ProductDetail(props) {
    let stars = Array(props.product.rating).fill(null).map(star => {
        return <span className="glyphicon glyphicon-star"></span>;
    });
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
                    <p className="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        {stars}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;