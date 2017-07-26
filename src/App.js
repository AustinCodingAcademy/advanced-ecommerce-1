import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNav from './components/HeaderNav';
import SideBar from './components/SideBar';
import Carousel from './components/Carousel';
import ProductDetail from './components/ProductDetail';
import StarRating from './components/StarRating';
function App(props) {
  console.log(props.products)
    return (
      <div className="App">

    <HeaderNav />

    <div className="container">
        <StarRating />
        <div className="row">
  

            <SideBar />

            <div className="col-md-9">
              <Carousel />

                <div className="row">
                  <ProductDetail products={props.products} />


                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="http://placehold.it/320x150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">$64.99</h4>
                                <h4><a href="#">Second Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">12 reviews</p>
                                <p>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star-empty"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="http://placehold.it/320x150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">$74.99</h4>
                                <h4><a href="#">Third Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">31 reviews</p>
                                <p>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star-empty"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="http://placehold.it/320x150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">$84.99</h4>
                                <h4><a href="#">Fourth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">6 reviews</p>
                                <p>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star-empty"></span>
                                    <span className="glyphicon glyphicon-star-empty"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="http://placehold.it/320x150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">$94.99</h4>
                                <h4><a href="#">Fifth Product</a>
                                </h4>
                                <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">18 reviews</p>
                                <p>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star-empty"></span>
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

    <div className="container">

        <hr/>


        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </footer>

    </div>
      </div>
    );
}

export default App;
