import React from 'react';

 function Rating(props) {
   const { product } = props;
   const arr = Array(product.rating).fill(null);
   const starSpans = arr.map((item, index) => {
     return <span key={index} className="glyphicon glyphicon-star"></span>;
   });

   return (
     <p>{starSpans}</p>
   );
 }

 export default Rating;
