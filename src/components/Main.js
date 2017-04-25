import react from "react"
import Biglinks from'./Biglinks';
import Carousel from'./Carousel';
import Thumbnail1 from'./Thumbnail1';
import Thumbnail2 from'./Thumbnail2';
import Thumbnail3 from'./Thumbnail3';
import Thumbnail4 from'./Thumbnail4';
import Thumbnail5 from'./Thumbnail5';
import Like from'./Like';

function Main() {
    var React = require("react"); // eslint-disable-line no-unused-vars
    return (
      <div className="container">

          <div className="row">

            <Biglinks />

              <div className="col-md-9">

                <Carousel />

                  <div className="row">

                    <Thumbnail1 />

                    <Thumbnail2 />

                    <Thumbnail3 />

                    <Thumbnail4 />

                    <Thumbnail5 />

                    <Like />

                  </div>

              </div>

          </div>

      </div>
  );
}
export default Main;
