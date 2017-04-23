import React from "react";
import StarRating from "./StarRating";

function ProductDetail(props){
    let items = props.items;
    let itemDivs = items.map(function (item, index) {
      return (

          <div>

              <div className="col-sm-4 col-lg-4 col-md-4">
                  <div className="thumbnail">
                      <img className="product-image" src={item.imgUrl} alt=""/>
                      <div className="caption">
                          <h4><a href="#">{item.name}</a>
                          <h4>{item.price}</h4>
                          </h4>
                          <p>{item.description}</p>
                      </div>
                      <div className="ratings">
                          <p className="pull-right">{item.reviews} reviews</p>
                          <StarRating stars={item.rating} />
                      </div>
                  </div>
              </div>
        </div>

    );
    });//React wants a key with a unique id(index)

    return (
      <div className="row">
          {itemDivs};
      </div>
    );
  }


export default ProductDetail;
