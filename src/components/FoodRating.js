import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default function FoodRating(props) {

  
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={props.rating}
        />
      </div>
    );
  
}


