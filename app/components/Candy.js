import React from 'react';
import { Link } from 'react-router-dom';

export default function Candy(props) {
   return (
      <div className="candy-container">
         <div className="container">
            <h1>{props.candy.name}</h1>
            <h3>Quantity: {props.candy.quantity}</h3>
            <p>{props.candy.description}</p>
         </div>
         <div className="container">
            <img src={props.candy.imageUrl} />
            <Link className="btn" to={`/candies/${props.candy.id}`}>
               Select
            </Link>
         </div>
      </div>
   );
}
