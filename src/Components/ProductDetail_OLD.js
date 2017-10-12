import React from "react";
import StarDisplay from "./StarDisplay";

/*
// represents only one single product
// takes a prop called product (object)
// and use it to populate price, name, desc, reviews, stars
*/

// removed className "pull-right" on product.price for spacing
// <h4 className="pull-right">{product.price}</h4>

function ProductDetail(props) {
  const products = props.product;
  return (
    <div>
      {products.map((product, i) =>
         <div key={i} className="col-sm-4 col-lg-4 col-md-4">
           <div className="thumbnail">
             <img src={product.imgUrl} alt={product.name} />
             <div className="caption">
               <h4><a href="#">{product.name}</a></h4>
               <h4>{product.price}</h4>
               <p>{product.description}</p>
             </div>
             <div className="ratings">
               <p className="pull-right">{product.reviews} Reviews</p>
               <StarDisplay stars={product.rating} />
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }

export default ProductDetail;
