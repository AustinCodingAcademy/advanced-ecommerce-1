import React from "react";
import Stars from "./Stars";
import NoStars from "./NoStars";

function ProductDetail(props){
    var stars = [];
    for (var i=0; i<props.product.rating; i++){   
        stars.push(<Stars />);
    }
    var nostars = [];
    for (var i=0; i<5-props.product.rating; i++){   
        nostars.push(<NoStars />);
    }
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src={props.product.imgUrl} alt=""/>
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
                                    {nostars}
                                </p>
                            </div>
                        </div>
        </div>
    )
}

export default ProductDetail;