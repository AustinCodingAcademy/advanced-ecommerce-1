import React, {Component} from 'react';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const prodLis = this.props.prod.products.products.map((item, i) => {
      return (
        <div key={i} className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
            <img src={item.imgUrl} className="img-thumbnail" alt=""/>
            <div className="caption">
              <h4 className="pull-right">{item.price}</h4>
              <h4>
                <a href="#">{item.name}</a>
              </h4>
              <p>{item.description}</p>
            </div>
            <div className="ratings">
              <p className="pull-right">{item.reviews} Reviews</p>
              <p>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {prodLis}
      </div>
    );
  }
}
