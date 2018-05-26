import React, {Component} from "react";
import PropTypes from "prop-types";


export default class ProductDetail extends Component {
  
  render() {
    const product = this.props.product;
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src={product.imgUrl} alt={product.name} />
          <div className="caption">
            <h4 className="pull-right">{product.price}</h4>
            <h4><a href="#">{product.name}</a>
            </h4>
            <p>{product.description}</p>
          </div>
          <div className="add-button">
            <button
              type="button"
              className="btn btn-default"
              onClick={() => this.props.clickEvent(product)}
          >Add to cart</button>
          </div>
          <div className="ratings">
            <p className="pull-right">{product.reviews} reviews</p>
            <p>
              {/* need to turn this into a loop */}
              {product.rating}
              <span className="glyphicon glyphicon-star" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  clickEvent: PropTypes.array.isRequired
};

// export default ProductDetail;
