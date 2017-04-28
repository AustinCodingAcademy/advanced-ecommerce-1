import React from "react";

function ProductInfo(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4 {this.props.inner.key}" >
      <div className="thumbnail">
        <img src={props.inner.imgUrl} alt=""
          onClick={props.onClick} />
        <div className="caption">
          <h4 className="pull-right">
            {props.inner.price}
          </h4>
          <h4>
            <a href="#">{props.inner.name}</a>
          </h4>
          <p>
            {props.inner.description}
            <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.inner.reviews} </p>
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
  );
}


export default ProductInfo;
