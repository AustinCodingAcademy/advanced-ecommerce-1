import React from "react";
import Carousel from "./Carousel";


class ProductDetail extends React.Component {
//  constructor(props) {
//    super(props);
//    const initProps = props.props;
//    console.log("initProps", initProps);
//    const propsArray = initProps.products;
//    console.log("propsArray", propsArray);
//    console.log("products id", props.props.products[0]);
// //    const propsMap = propsArray.map(function (product, index) {
// //      return {
// //        id: props.id,
// //      };
// //    });
// //    this.state = {
// //      id: this.products.id,
// //    };
// //    const userDivs = props.products.map(function (user, index) {
// //      return {
// //        id: props.id,
// //				name: props.name,
// //				
// //      };
// //    });
// //		<div key={index}>{users.first_name}</div>;
//  }
  render(props) {
    console.log("in render", this.props);
    return ( 
      <div className="container">
				
        <div className="row">

          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>

          <div className="col-md-9">

            <Carousel />

            <div className="row">

              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt="" />
                  <div className="caption">
                    <h4 className="pull-right">$24.99</h4>
                    <h4><a href="#">First Product</a>
                    </h4>
                    <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">15 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt="" />
                  <div className="caption">
                    <h4 className="pull-right">$64.99</h4>
                    <h4><a href="#">Second Product</a>
                    </h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">12 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star-empty" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt="" />
                  <div className="caption">
                    <h4 className="pull-right">$74.99</h4>
                    <h4><a href="#">Third Product</a>
                    </h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">31 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star-empty" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt="" />
                  <div className="caption">
                    <h4 className="pull-right">$84.99</h4>
                    <h4><a href="#">Fourth Product</a>
                    </h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">6 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star-empty" />
                      <span className="glyphicon glyphicon-star-empty" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt="" />
                  <div className="caption">
                    <h4 className="pull-right">$94.99</h4>
                    <h4><a href="#">Fifth Product</a>
                    </h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">18 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star" />
                      <span className="glyphicon glyphicon-star-empty" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4 col-md-4">
                <h4><a href="#">Like this template?</a>
                </h4>
                <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

		 
export default ProductDetail;
