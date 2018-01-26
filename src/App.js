import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <div className="App">
     {/*<Header>*/}
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>
          
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li >
                        <a href="#">Items In Cart (0)</a>
                    </li>
                </ul>
            </div>
         
        </div>
      
    </nav>
{/*</Header>*/}
 
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
                {/*<Carousel>*/}
                <div className="row carousel-holder">

                    <div className="col-md-12">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                                <div className="item">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                                <div className="item">
                                    <img className="slide-image" src="http://placehold.it/800x300" alt=""/>
                                </div>
                            </div>
                            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>

                </div>
                {/*</Carousel>*/}
                <div className="row">
                    {/*<ProductDetail>*/}
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="http://placehold.it/320x150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">$24.99</h4>
                                <h4><a href="#">First Product</a>
                                </h4>
                                <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                            </div>
                            <div className="ratings">
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
                    {/*</ProductDetail>*/}
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
{/*
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>
*/}
                </div>

            </div>

        </div>

    </div>
   
    <div className="container">

        <hr/>

      {/*<Footer>*/}
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
        </footer>
       {/*</Footer>*/}
    </div>
      </div>
    );
}

export default App;
