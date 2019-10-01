import React,{Component} from 'react';
import './style.css';
import StarRatings from 'react-star-ratings'


class RatingBar extends Component{    
    constructor(props) {
        super(props);
        this.state = {
            rating : 3};
        this.changeRating.bind(this);
     
    }
    
    changeRating = (newRating, name ) => {
        this.setState({
          rating: newRating
        });
      }
  
    render() {
      return (
        <div>
          <StarRatings
          rating={this.state.rating}
          starRatedColor="gold"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
        </div>
      );
    }
}


export default RatingBar; 
