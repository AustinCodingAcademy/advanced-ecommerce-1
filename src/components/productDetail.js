import React from "react";
export default class ProductDetail extends React.Component {
  
  state = {
    stars: <span className="glyphicon glyphicon-star" />,
    
  }

  getStars(props){
    const stars = []
    for(let i = 0; i < this.props.info.rating; i++){
      stars.push(this.state.stars)
    }
    return stars
  }
  addToCart(e){
    return this.props.addToCart(this.props.info)
  }

  render() {
    return( 
    <div>
        <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt="" />
            <div className="caption">
              <h4 className="pull-right">{this.props.info.price}</h4>
              <h4>
                <a href="#">{this.props.info.name}</a>
              </h4>
              <p>
                {this.props.info.description}
                <a target="_blank" href="http://www.bootsnipp.com">
                  Bootsnipp - http://bootsnipp.com
                </a>.
              </p>
            </div>
            <button onClick={(e)=>{this.addToCart(e)}}>Add to cart</button>
            <div className="ratings">
              <p className="pull-right">{this.props.info.reviews}</p>
              <p>{this.getStars()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
    