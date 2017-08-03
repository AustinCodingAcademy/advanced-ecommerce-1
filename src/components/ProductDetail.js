import React from 'react';

function ProductDetail(props) {
    
    let {product} = props;

    var stars = [];
    for(var i=0; i<product.rating; i++) {
        stars.push(<span className="glyphicon glyphicon-star"></span>);
    }

    return (
        <div className="thumbnail">
            <img src={product.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">{product.price}</h4>
                <h4><a href="#">{product.name}</a>
                </h4>
                <p>{product.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{product.reviews} reviews</p>
                <p>
                    {stars}
                </p>
            </div>
        </div>
    );

    return (
        <div>
            {product}
        </div>
    );
}

export default ProductDetail;