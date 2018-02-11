import React from "react";

function ProductDetail(props) {


  return (<div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                  <img src={props.product.imgUrl} alt={props.product.description} />
                  <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4><a href="#">{props.product.name}</a>
                    </h4>
                    <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                  </div>
                  <div className="ratings">
                      <p className="pull-right">{props.product.reviews} reviews</p>
                      <p>
                          <span>{props.product.rating} stars</span>
                      </p>
                  </div>
              </div>
          </div>)
}


export default ProductDetail;
