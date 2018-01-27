import React from 'react'; 
function ProductDetail(props){
    let starRating = props.product.rating; 
    let totalStars = [];
    let emptyStarsNum = 5 - starRating;
    let emptyStars = [];
    for(var i=0; i< starRating; i++){ 
        totalStars.push(<span className="glyphicon glyphicon-star"></span>)
    }
    for(var j=0; j< emptyStarsNum; j++){
        emptyStars.push(<span className="glyphicon glyphicon-star-empty"></span>)
    }

    return ( 
        // {props.product.name}
                    <div className="col-sm-4 col-lg-4 col-md-4">
                    <div className="thumbnail">
                        {/* <img src="http://placehold.it/320x150" alt=""/> */}
                        <img src={props.product.imgUrl} alt=""/>

                        <div className="caption">
                            <h4 className="pull-right">{props.product.price}</h4>
                            <h4><a href="#">{props.product.name} </a>
                            </h4>
                            <p> {props.product.description} </p>
                            {/* <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p> */}
                        </div>
                        <div className="ratings">
                            <p> {starRating} Star Rating</p>
                            <p className="pull-right">{props.product.reviews} Reviews</p>
                            <p>
                                 {totalStars} {emptyStars}
                                {/* <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span> */}
                            </p>
                        </div>
                    </div>
                </div>
        )      
    }
export default ProductDetail;