import React, { Component } from "react";


 
class ProductDetail extends Component {
  renderStars(product) {
       
    if (product.rating == 1) {
      return ( <p> <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star-empty" />
        <span className="glyphicon glyphicon-star-empty" />
        <span className="glyphicon glyphicon-star-empty" />
        <span className="glyphicon glyphicon-star-empty" /></p>);
    } else if (product.rating == 2) {
      return ( <p> <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star-empty" /> 
        <span className="glyphicon glyphicon-star-empty" />
        <span className="glyphicon glyphicon-star-empty" /></p>);
    } else if (product.rating == 3) {
      return ( <p> <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star-empty" />
        <span className="glyphicon glyphicon-star-empty" /></p>);
    } else if (product.rating == 4) {
      return ( <p> <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star-empty" /></p>);
    } else if (product.rating == 5) {
      return ( <p> <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" />
        <span className="glyphicon glyphicon-star" /></p>);
    }
  }
  


  render() {
    const product = this.props.product

    
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
                          <img src="http://placehold.it/320x150" alt="" />
                          <div className="caption">
                              <h4 className="pull-right">{product.price}</h4>
                              <h4><a href="#">{product.name}</a>
                                </h4>
                              <p>{product.description}</p>
                              <button onClick={() => this.props.handleAddToCart(product)}>Add To Cart</button>
                            </div>
                          <div className="ratings">
                              <p className="pull-right">{product.reviews} reviews</p>
                                
                              {this.renderStars(product)}
                               
                            </div>
                        </div>
        </div>
    );
  }
}
 
export default ProductDetail;
