import React, {Component} from "react";
import PropTypes from "prop-types";


class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false,
    };
  }

  handleBtnClick() {
    console.log("Btn Clicked");
    this.setState({
      hide: !this.state.hide
    })
  }

  render() {
    const customerReviews = this.props.snips;
    console.log(customerReviews + "from Reviews");
    return (
      <div>
        <button className="btn btn-success" onClick={this.handleBtnClick.bind(this)}> Hide </button>
      </div>
    );

  }
}

// <button onClick={reviewBoxes}> Hide </button>

Reviews.propTypes = {
  props: PropTypes.array,

};



export default Reviews;
