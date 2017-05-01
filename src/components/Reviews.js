import React, {Component} from "react";
import PropTypes from "prop-types";
import CreateReviews from "./CreateReviews";


class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false,
    };
  }

  handleBtnClick() {
    console.log("Btn Clicked " + this.state.hide);
    this.setState({
      hide: !this.state.hide
    });
  }

  changeWord(what) {
    if (what === false) {
      return "Show Reviews";
    }
    return "Hide Reviews";
  }

  render() {
    const customerReviews = this.props.snips;
    const ReviewItems = this.props.snips.map((box, index) => {
      return (<CreateReviews
        key={index}
        info={box}
        isTrue={this.state.hide}
        />
      );
    });

    console.log(customerReviews + "from Reviews");
    return (
      <div>
        <button className="btn btn-success"
          onClick={this.handleBtnClick.bind(this)}> {this.changeWord(this.state.hide)}
        </button>
        <div>
          {ReviewItems}
        </div>
      </div>
    );
  }
}


Reviews.propTypes = {
  props: PropTypes.array.isRequired,
  snips: PropTypes.array.isRequired
};



export default Reviews;
