import React, { Component } from "react"
import propType from "prop-types"

export default class ProductDetail extends Component{
  render(){
      const product = this.props.product
      
      const ratingStar = (stars)=>{
          let starArr = []
          for (let i = 0; i < stars; i++) {
              starArr.push(<span key={i+"-1"} className="glyphicon glyphicon-star"></span> )
            }
            for (let i = 0; i < (5-stars); i++){
            starArr.push(<span key={i+"-2"} className="glyphicon glyphicon-star-empty"></span>)
            }
        return starArr
      }

    return(
      <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
              <img src={product.imgUrl} alt=""/>
              <div className="caption">
                  <h4 className="pull-right">{product.price}</h4>
                  <h4><a href="#">{product.name}</a>
                  </h4>
                  <p>{product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
              </div>
              <div className="btn-group" role="group">
                <button 
                    type="button"
                    className="btn btn-default"
                    onClick={()=>this.props.clickEvent(product)}
                    >
                    Add to Cart
                </button>
              </div>
              <div className="ratings">
                  <p className="pull-right">{product.reviews} reviews</p>
                  <p>
                      {ratingStar(product.rating)}

                  </p>
              </div>
          </div>
      </div>
    )
  }
}

ProductDetail.propType = {
    product: propType.object.isrequired
}