import { Component } from "react"

class ProductDetail extends Component{
    render(){
    const showStars = (i) => {
        const stars = [];
        for (i = 0; i < props.product.rating; i++) {
          stars.push(<span className="glyphicon glyphicon-star" />);
        }

        for (i = 0; i < 5 - props.product.rating; i++) {
            stars.push(<span className="glyphicon glyphicon-star-empty" />);
          }
          return stars.map((star) => {
            return star;
          });
        };

    return(
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.product.imgUrl} alt="" />
                <div className="caption">
                    <h4 className="pull-right">{props.product.price}</h4>
                    <h4><a href="#">{props.product.name}</a>
                    </h4>
                    <p>{props.product.description} <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.product.reviews} reviews</p>
                    <p>
                        {showStars()}
                    </p>
                </div>
                <div className="btn-group" role="group">
                <button type="button" className="btn btn-default" onClick={props.addItem}>
                    Add to Cart
                </button>
              </div>
            </div>
        </div>
    );
};
};

export default ProductDetail;