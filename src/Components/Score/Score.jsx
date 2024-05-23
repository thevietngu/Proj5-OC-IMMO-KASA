import React from 'react';
import starRed from '../../Assets/Pictures/star-red.png';
import starGrey from '../../Assets/Pictures/star-grey.png';
import './Score.scss';


function Score({ value }) {

  return (

    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < value ? starRed : starGrey}
          alt="star"
        />
      ))}
    </div>
  );
};

export default Score