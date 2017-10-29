import React from 'react';

function ProductDetail(props) {
let ratingsArr = [];
for(let i = 0; i < 5; i++){
  if(i < props.product.rating) {
    ratingsArr.push(<span key={i} className="glyphicon glyphicon-star"></span>)
  } else {
    ratingsArr.push(<span key={i} className="glyphicon glyphicon-star-empty"></span>)
  }
}
if(props.product.rating)

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src={props.product.imgUrl} alt=""/>
            <div className="caption">
                <h4 className="pull-right">{props.product.price}</h4>
                <h4><a href="#">{props.product.name}</a>
                </h4>
                <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.product.reviews} reviews</p>
                <p>
                    {ratingsArr}
                </p>
            </div>
        </div>
    </div>
  )
}
export default ProductDetail;
