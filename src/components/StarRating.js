import React from 'react';

export default class StarRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
      rating_empty_initial: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating: nextValue});
  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_custom_icon: nextValue});
  }

  onStarClickHalfStar(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_half_star: nextValue});
  }

  onStarClickEmptyInitial(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_empty_initial: nextValue});
  }

  render() {
    return (

        <div className="ratings">

 {/* style={{fontSize: 24}} */}
           <div>

             <StarRating
               name="app5"
               starColor="#ffb400"
               emptyStarColor="#ffb400"
               value={this.state.rating_half_star}
               onStarClick={this.onStarClickHalfStar.bind(this)}
               renderStarIcon={(index, value) => {
                 return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
               }}
               renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
             />
           </div>
         </div>
       )
     }
   }
