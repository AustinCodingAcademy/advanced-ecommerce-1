import React from "react";
import state from "../state.js";

function StarRatings(rating) {
   var starContent = [];
   for(var i=1; i<=rating; i++) {
         starContent.push(<span key={i} className="glyphicon glyphicon-star"></span>)
      }
   return starContent;
   console.log(starContent);

}

function ProductDetail(props) {
     return (
          <div>
         <div className="col-sm-4 col-lg-4 col-md-4">
             <div className="thumbnail">
                 <img src={props.product.imgUrl} alt="" />
                 <div className="caption">
                     <h4 className="pull-right">{props.product.price}</h4>
                     <h4><a href="#">{props.product.name}</a>
                     </h4>
                     <p>{props.product.description}</p>
              </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews}</p>
                <p>
               {StarRatings(props.product.rating)}
               </p>
               <p>
            {StarRatings}
            </p>

              </div>
            </div>
        </div>
   </div>
);
}





export default ProductDetail;
