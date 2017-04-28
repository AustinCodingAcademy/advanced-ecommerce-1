import React, {Component} from "react";
import PropTypes from "prop-types";


class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }
  render() {
    const customerReviews = this.props.snips;
    console.log(customerReviews + "from Reviews");
    return (
      <div />
    );

  }
}

Reviews.propTypes = {
  props: PropTypes.array,

};



export default Reviews;
