import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

export default class StarRating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.rating
        };
    }

    // onStarClick(nextValue, prevValue, name) {
    //     this.setState({rating: nextValue});
    // }

    render() {
        const { rating } = this.state;
        return (
            <div>

                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    
                />
            </div>
        );
    }
}
