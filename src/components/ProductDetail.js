import React from "react";

function ProductDetail(props) {

    let stars=[];
    for (var i=0; i < props.products.rating; i++){
        stars.push(<span className="glyphicon glyphicon-star-empty"></span>);}


    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.products.imgUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{props.products.price}</h4>
                    <h4><a href="#">{props.products.id}</a>
                    </h4>
                    <p>{props.products.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.products.reviews}</p>
                    <p>
                        {stars}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
