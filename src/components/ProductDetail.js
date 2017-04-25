import React from "react";
import Stars from "./Stars";

function ProductDetail(props){
    let items = props.items;
    let itemDivs = items.map(function (item, index) {
      return (

          <div key={index}>

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
                          <Stars stars={item.rating} />
                      </div>
                  </div>
              </div>
        </div>

    );
    });

    return (
      <div className="row">
          {itemDivs};
      </div>
    );
  }


export default ProductDetail;