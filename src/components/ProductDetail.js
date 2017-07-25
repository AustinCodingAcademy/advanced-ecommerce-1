import React from 'react';
// import StarRating from './StarRating';

export default function ProductDetail(props){

  var products = props.products;

  return(
  <div>
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">

            <img src={products[0].imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">$24.99</h4>
                <h4><a href="#">{products[0].name}</a>
                </h4>
                <p>{products[0].description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
            </div>
                <p className="pull-right">15 reviews</p>
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
