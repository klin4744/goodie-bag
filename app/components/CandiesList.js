import React from 'react';
import Candy from './Candy';

// eslint-disable-next-line react/prefer-stateless-function

function CandiesList(props) {
   return (
      <div>
         {props.candies.map(candy => (
            <Candy candy={candy} key={candy.id} />
         ))}
      </div>
   );
}

export default CandiesList;
