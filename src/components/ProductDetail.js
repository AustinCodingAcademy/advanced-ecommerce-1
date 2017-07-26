import React from 'react';
import StarRating from './StarRating';

export default function ProductDetail(props){

  var products = props.products.products;
    console.log(products);
<<<<<<< HEAD
  return({products.map(function(att){
  <div>
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">

            <img src={att.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right"></h4>
                <h4><a href="#">{att.name}</a>
                </h4>
                <p>{att.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
            </div>
                <p className="pull-right">{att.price}reviews</p>
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
    )
  }
})


=======

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
>>>>>>> 3a0653052b7174899c4709610b82a9a6d255571a
}
