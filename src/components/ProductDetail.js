import React from 'react';



class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picStyle: this.props.picStyle
    };
  }

  render() {
    var picStyle = this.state.picStyle;
    console.log(picStyle);
    return (
      <div key={this.props.product.id}>

        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img style={{picStyle}} src={this.props.product.imgUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{this.props.product.price}</h4>
                    <h4><a href="#">{this.props.product.name}</a>
                    </h4>
                    <p>{this.props.product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{this.props.product.reviews}</p>
                    <p>
                        {starMaker(this.props.product.rating)}
                    </p>
                </div>
            </div>
        </div>

      </div>
    )
  }

}

function starMaker(stars) {
  var starObj = [];
  for (var i=1; i<=5; i++) {
    if (stars >= i) {
      starObj.push(<span className="glyphicon glyphicon-star"></span>)
    } else {
      starObj.push(<span className="glyphicon glyphicon-star-empty"></span>)
    }
  }
  return starObj;
}

export default ProductDetail;

// <div className="col-sm-4 col-lg-4 col-md-4">
//     <div className="thumbnail">
//         <img src="http://placehold.it/320x150" alt=""/>
//         <div className="caption">
//             <h4 className="pull-right">$24.99</h4>
//             <h4><a href="#">First Product</a>
//             </h4>
//             <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
//         </div>
//         <div className="ratings">
//             <p className="pull-right">15 reviews</p>
//             <p>
//                 <span className="glyphicon glyphicon-star"></span>
//                 <span className="glyphicon glyphicon-star"></span>
//                 <span className="glyphicon glyphicon-star"></span>
//                 <span className="glyphicon glyphicon-star"></span>
//                 <span className="glyphicon glyphicon-star"></span>
//             </p>
//         </div>
//     </div>
// </div>
      // <div className="col-sm-4 col-lg-4 col-md-4">
      //     <div className="thumbnail">
      //         <img src="http://placehold.it/320x150" alt=""/>
      //         <div className="caption">
      //             <h4 className="pull-right">$64.99</h4>
      //             <h4><a href="#">Second Product</a>
      //             </h4>
      //             <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //         </div>
      //         <div className="ratings">
      //             <p className="pull-right">12 reviews</p>
      //             <p>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star-empty"></span>
      //             </p>
      //         </div>
      //     </div>
      // </div>
      //
      // <div className="col-sm-4 col-lg-4 col-md-4">
      //     <div className="thumbnail">
      //         <img src="http://placehold.it/320x150" alt=""/>
      //         <div className="caption">
      //             <h4 className="pull-right">$74.99</h4>
      //             <h4><a href="#">Third Product</a>
      //             </h4>
      //             <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //         </div>
      //         <div className="ratings">
      //             <p className="pull-right">31 reviews</p>
      //             <p>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star-empty"></span>
      //             </p>
      //         </div>
      //     </div>
      // </div>
      //
      // <div className="col-sm-4 col-lg-4 col-md-4">
      //     <div className="thumbnail">
      //         <img src="http://placehold.it/320x150" alt=""/>
      //         <div className="caption">
      //             <h4 className="pull-right">$84.99</h4>
      //             <h4><a href="#">Fourth Product</a>
      //             </h4>
      //             <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //         </div>
      //         <div className="ratings">
      //             <p className="pull-right">6 reviews</p>
      //             <p>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star-empty"></span>
      //                 <span className="glyphicon glyphicon-star-empty"></span>
      //             </p>
      //         </div>
      //     </div>
      // </div>
      //
      // <div className="col-sm-4 col-lg-4 col-md-4">
      //     <div className="thumbnail">
      //         <img src="http://placehold.it/320x150" alt=""/>
      //         <div className="caption">
      //             <h4 className="pull-right">$94.99</h4>
      //             <h4><a href="#">Fifth Product</a>
      //             </h4>
      //             <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //         </div>
      //         <div className="ratings">
      //             <p className="pull-right">18 reviews</p>
      //             <p>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star"></span>
      //                 <span className="glyphicon glyphicon-star-empty"></span>
      //             </p>
      //         </div>
      //     </div>
      // </div>
      //
      // <div className="col-sm-4 col-lg-4 col-md-4">
      //     <h4><a href="#">Like this template?</a>
      //     </h4>
      //     <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
      //     <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
      // </div>
