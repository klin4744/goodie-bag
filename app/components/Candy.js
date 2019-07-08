import React from 'react';
import { Link } from 'react-router-dom';

export default function Candy(props) {
   return (
      <div className="candy-container ">
         <div className="container">
            <h1>{props.candy.name}</h1>
            <h3>Quantity: {props.candy.quantity}</h3>
            <p>{props.candy.description}</p>
         </div>
         <div className="container">
            <img src={props.candy.imageUrl} />
            <div className="row mt-3">
               <div className="col-sm-6">
                  <Link
                     className="btn btn-block btn-primary btn-pink"
                     to={`/candies/${props.candy.id}`}
                  >
                     Select
                  </Link>
               </div>

               <div className="col-sm-6">
                  <button
                     type="button"
                     onClick={() => props.removeCandy(props.candy)}
                     className="btn btn-block btn-danger"
                  >
                     Remove
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
