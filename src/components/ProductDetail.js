import React from "react";
import state from "../state.js";

function starRatings(props) {
   const starContent = [];
   for(var i=1; i<=props.rating; i++) {
         starContent.push(<span key={i} className="glyphicon glyphicon-star"></span>)
      }
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
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                </p>
              </div>
            </div>
        </div>
   </div>
);
}




export default ProductDetail;
