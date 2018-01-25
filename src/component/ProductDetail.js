import React from 'react'; 
function ProductDetail(props){
    let starRating = props.product.rating; 
    let totalStars = '<span className="glyphicon glyphicon-star"></span>';

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
                            <p> {props.product.rating} {starRating}</p>
                            <p className="pull-right">{props.product.reviews} Reviews</p>
                            <p>
                                {/* {totalStars} */}
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                            </p>
                        </div>
                    </div>
                </div>
        )      
    }
export default ProductDetail;