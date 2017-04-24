import React from "react";

export default class ProductInfo extends React.Component{
  render() {
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 {this.props.key}" >
        <div className="thumbnail">
          <img src={this.props.img} alt="" />
          <div className="caption">
            <h4 className="pull-right">
              {this.props.price}
            </h4>
            <h4>
              <a href="#">{this.props.name}</a>
            </h4>
            <p>
              {this.props.description}
              <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.
            </p>
          </div>
          <div className="ratings">
            <p className="pull-right">{this.props.reviews} </p>
            <p>
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
            </p>
          </div>
        </div>
      </div>
    )
  }
}
