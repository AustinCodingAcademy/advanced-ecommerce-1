import React from "react";

function ProductDetail(props){

    var starMarkup = '';
    for (var i = 0, j = props.product.rating; i < j; i++) {
        starMarkup += '★';
    }

    return (

        <div className="md-down-col-6 md-col-4 p2">
            <div className="thumbnail">
                <img src="http://placehold.it/320x150" className="block col-12 mb1" alt=""/>
                <div className="caption">
                    <h4 className="fz2 mt0 mb1"><a className="no-underline" href="#">{props.product.name}</a></h4>
                    <h4 className="fz1 mt0 mb1">{props.product.price}</h4>
                    <p className="fzn1 mt0 mb1">{props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="fzn2 m0 gray">{props.product.reviews} reviews</p>
                    <p className="fz3 m0 orange">
                        {starMarkup}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail;