import React from 'react';
import StarRating from './StarRating';

export default function ProductDetail(props){

  var products = props.products.products;
    console.log(products);

    var mapProd = products.map(function(product){
       return(
         
        <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src={product.imgUrl} alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">{product.price}</h4>
                                <h4><a href="#">{product.name}</a>
                                </h4>
                                <p>{product.description}</p>
                            </div> 
                  </div>
        </div>
                
)});
    console.log(mapProd);
    return(<div>
        
          <div>{mapProd.map(x=>x)}</div> 
        </div>);
}
