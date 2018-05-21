
import React from "react";
import "../App.css";

function Carousel() {

  return (
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
              <img className="slide-image" src="https://dummyimage.com/800X300/ed3b3b/fff&text=Store" alt="" />
            </div>
            <div className="item">
              <img className="slide-image" src="https://dummyimage.com/800X300/ed3b3b/fff&text=Store" alt="" />
            </div>
            <div className="item">
              <img className="slide-image" src="https://dummyimage.com/800X300/ed3b3b/fff&text=Store" alt="" />
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

  );
}

export default Carousel;
