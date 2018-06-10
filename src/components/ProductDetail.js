import React, {Component} from "react";

class ProductDetail extends Component {

     populateStars = () => {
        const stars = []
        for(let x=0; x<props.product.rating; x++){
            stars.push(<span className="glyphicon glyphicon-star"></span>)
        }
        for(let y=0; y<5-props.product.rating; y++){
            stars.push(<span className="glyphicon glyphicon-star-empty"/>)
        } return stars
    }
    render() {
        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={this.props.product.imgUrl} alt=""/>
                <div className="caption">
                <h4><a href="#">{this.props.product.name}</a>
                    <h4>{this.props.product.price}</h4>
                    
                    </h4>
                    <p>{this.props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{this.props.product.reviews} reviews</p>
                    <p>
                        {this.populateStars()}
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default ProductDetail;