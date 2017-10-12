import React from "react";
import StarDisplay from "./StarDisplay";

// represents only one single product
// takes a prop called product (object)
// and uses it to populate price, name, desc, reviews, stars

// removed className "pull-right" on product.price for spacing
// <h4 className="pull-right">{product.price}</h4>

function ProductDetail(props) {
  return (
    <div>
         <div className="col-sm-4 col-lg-4 col-md-4">
           <div className="thumbnail">
             <img src={props.product.imgUrl} alt={props.product.name} />
             <div className="caption">
               <h4><a href="#">{props.product.name}</a></h4>
               <h4>{props.product.price}</h4>
               <p>{props.product.description}</p>
             </div>
             <div className="ratings">
               <p className="pull-right">{props.product.reviews} Reviews</p>
               <StarDisplay stars={props.product.rating} />
             </div>
           </div>
         </div>
     </div>
  );
}

export default ProductDetail;
