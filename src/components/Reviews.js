import React, {Component} from "react";
import PropTypes from "prop-types";


class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }



  handleBtnClick() {
    console.log("Btn Clicked " + this.state.hide);
    this.setState({
      hide: !this.state.hide
    })
  }

  doReviews() {
    if(this.state.hide === false){
      this.props.snips.map((snip) => {
        return(
          <p>
            <h4>
              {customerReviews.description}
            </h4>
          </p>
        ) 
      })
    } else {
        return(
          <div />
        )
    }
  }
    // if(this.state.hide === false){
    //   customerReviews.map((snip) => {
    //    return(
    //         <p>
    //           <h4>
    //             {customerReviews.description}
    //           </h4>
    //         </p>
    //     ) )
    //   } else {
    //       return (
    //         <div />
    //       )
    //   }
    // }
  // }

  render() {
    const customerReviews = this.props.snips;
    console.log(customerReviews + "from Reviews");
    return (
      <div>
        <button className="btn btn-success" onClick={this.handleBtnClick.bind(this)}> Hide </button>
        {this.doReviews()}
      <div />
    );
  }
}


Reviews.propTypes = {
  props: PropTypes.array,

};



export default Reviews;
