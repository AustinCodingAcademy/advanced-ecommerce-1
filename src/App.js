import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductDetail from "./components/ProductDetail";

function App(props) {


  const renderProductDetail = () => {
    
    return props.products.map((prod, key) => {
      return <ProductDetail product={prod} key={key} />;
    });
  };
  
    
  return (
    <div className="App">
      {/* <ProductDetail product={props.products[2]} /> */}

      {/* <Header>*/}
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
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
      {/* </Header>*/}
 
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
            {/* <Carousel>*/}
            <div className="row carousel-holder">

              <div className="col-md-12">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
                    <li data-target="#carousel-example-generic" data-slide-to="1" />
                    <li data-target="#carousel-example-generic" data-slide-to="2" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="item active">
                      <img className="slide-image" src="http://placehold.it/800x300" alt="" />
                    </div>
                    <div className="item">
                      <img className="slide-image" src="http://placehold.it/800x300" alt="" />
                    </div>
                    <div className="item">
                      <img className="slide-image" src="http://placehold.it/800x300" alt="" />
                    </div>
                  </div>
                  <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                  </a>
                  <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                  </a>
                </div>
              </div>

            </div>
            {/* </Carousel>*/}
            <div className="row">
              {renderProductDetail()}
             
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

        <hr />

        {/* <Footer>*/}
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
        {/* </Footer>*/}
      </div>
    </div>
  );
}

export default App;
