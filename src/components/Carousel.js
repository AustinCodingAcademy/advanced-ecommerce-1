import React from "react";
import "./App.css";
import state from "../state";

function Carousel() {
  function showProducts(product) {
    return (
      <div className="item">
        {product.name}
        <img className="slide-image" src={product.imgUrl} alt="" />
      </div>
    );
  }
  {
    // const carouselProducts = state.products.map(showProducts);
  }
  return (
    <div className="carousel-holder">
      <div className="col-md-12">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
            <li data-target="#carousel-example-generic" data-slide-to="1" />
            <li data-target="#carousel-example-generic" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            {
              state.products.map((product) => {
                return (
                  <showProducts key={product.id} imgUrl={product.imgUrl} />
                );
              })
            }
            {/*
              <div className="item active">
                <img className="slide-image" src="http://placehold.it/800x300" alt="" />
              </div>
              <div className="item">
                <img className="slide-image" src="http://placehold.it/800x300" alt="" />
              </div>
              <div className="item">
                <img className="slide-image" src="http://placehold.it/800x300" alt="" />
              </div>
              */}
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
  );
}

export default Carousel;
{/*

// App(props) {
// each = props.state.products[index]
// props.state.products.map((each,index) =>{return(<ProductDetail key={index} name={props.state.products[index].name}... />,]);

// App(props) {
// props.state.products.map((product) =>{return(<ProductDetail key={product.id} name={product.name}... />,]);

// key declared last overrides

// Object.assign
*/}
