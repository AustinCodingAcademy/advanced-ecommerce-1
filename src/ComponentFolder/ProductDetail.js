import React from "react";

function ProductDetail(props){

  return(
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img src={props.products.imgUrl} alt=""/>
        <div className="caption">
          <h4 className="pull-right">{props.products.price}</h4>
          <h4><a href="#">{props.products.name}</a>
          </h4>
          <p>{props.products.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp-http://bootsnipp.com</a>
          </p>
          <div>

          </div>

        </div>
        <div className="ratings">
          <p className="pull-right">{props.products.reviews}</p>
          <p>
          </p>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;
