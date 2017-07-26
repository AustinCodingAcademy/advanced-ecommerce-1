import React from 'react';
// import StarRating from './StarRating';

export default function ProductDetail(props){

  var products = props.products.products;
    console.log(products);
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


}
