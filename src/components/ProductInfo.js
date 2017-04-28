import React from "react";
import PropTypes from "prop-types";
import Reviews from "./Reviews";


function ProductInfo(props) {
  const stars = [];

  for (let totalOfStars = 0; totalOfStars < props.inner.rating; totalOfStars++) {
    stars.push(<span className="glyphicon glyphicon-star" key={totalOfStars} />);
  }
  const multipleStars = stars.map((star,) => star);
  console.log(props.inner.comments + "from ProductInfo");

  return (
    <div className="col-sm-4 col-lg-4 col-md-4 {this.props.inner.key}" >
      <div className="thumbnail">
        <img src={props.imageToUse} alt=""
          onClick={props.onClick} />
        <div className="caption">
          <h4 className="pull-right">
            {props.inner.price}
          </h4>
          <h4>
            <a href="#">{props.inner.name}</a>
          </h4>
          <p>
            {props.inner.description}
            <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.inner.reviews}</p>
          <p>
            {multipleStars}
          </p>
          <Reviews snips={props.inner.comments} />
        </div>
      </div>
    </div>
  );
}



ProductInfo.propTypes = {
  imageToUse: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inner: PropTypes.shape({
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
  })
};

export default ProductInfo;
