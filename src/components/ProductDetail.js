import React from "react";

class ProductDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    createStars(numOfStars) {
        var starsObj = [];
        for (var i=0; i < numOfStars; i++){
            starsObj.push(<span className="glyphicon glyphicon-star"></span>);
        }
        for (var i=numOfStars; i < 5; i++){
            starsObj.push(<span className="glyphicon glyphicon-star-empty"></span>);
        }

        return starsObj;
    }

    

    render() {
        
        // console.log(this.props)
        return (
            <div key={this.props.product.id} className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                    <img src="http://placehold.it/320x150" alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">{this.props.product.price}</h4>
                        <h4><a href="#">{this.props.product.name}</a>
                        </h4>
                        <p>{this.props.product.description}</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{this.props.product.reviews} reviews</p>
                        {this.createStars(this.props.product.rating)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;