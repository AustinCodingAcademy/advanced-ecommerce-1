import React from "react"

function rating(input) {
    var n = parseInt(input)
    var rating = [];
    for (var i = 0; i < n; i++) {
     rating.push(<span className="glyphicon glyphicon-star"></span>);
    }
    return rating;
}                    

function ProductDetail(props) {
    return (<div className="col-sm-4 col-lg-4 col-md-4">
    <div className="thumbnail">
        <img src={props.product.imgUrl} alt=""/>
        <div className="caption">
            <h4 className="pull-right">{props.product.price}</h4>
            <h4><a href="#">{props.product.name}</a>
            </h4>
            <p>{props.product.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
        </div>
        <div className="ratings">
            <p className="pull-right">{props.product.reviews}</p>
            <p>

            {props.product.rating};

            </p>
        </div>
    </div>
</div>)
    
    
}

export default ProductDetail;