import React from "react";

function Stars(props) {
  let stars = props.stars;
  let arr = [];
  const totalStars = 5;
  for (let i = 0; i < totalStars; i++) {
    if (stars > 0) {
      arr.push(<span className="glyphicon glyphicon-star" />);
      stars--;
    } else {
      arr.push(<span className="glyphicon glyphicon-star-empty" />);
    }
  }
  return (
    <p>
      {arr}
    </p>
  );
}

function ProductDetail(props) {
  let items = props.items.products;
  let productDivs = items.map(function (item, index) {

    return (
      <div key={index}>
        <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
            <img src={item.imgUrl} alt="" />
            <div className="caption">
              <h4 className="pull-right">{item.price}</h4>
              <h4><a href="#">{item.name}</a>
              </h4>
              <p>{item.description}</p>
            </div>
            <div className="ratings">
              <p className="pull-right">{item.reviews} reviews</p>

              <p>
                <Stars stars={item.rating} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="row">
      {productDivs};
    </div>
  );
}

export default ProductDetail;
