/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { updateDb, INCREMENT, DECREMENT } from '../reducers';

const SingleCandyView = props => {
   const candy = props.candies.find(
      // eslint-disable-next-line radix
      myCandy => myCandy.id === parseInt(props.match.params.id),
   );
   if (candy) {
      return (
         <div className="single-candy-view mt-5">
            <div>
               <img src={candy.imageUrl} />
            </div>
            <div>
               <h1>{candy.name}</h1>
               <h3>
                  Quantity:
                  {' ' + candy.quantity}
               </h3>
               <p>{candy.description}</p>
               <div className="row">
                  <div className="col-sm-6">
                     <button
                        className="btn btn-primary btn-pink"
                        onClick={() => props.updateDb(candy, INCREMENT)}
                     >
                        Increment Quantity
                     </button>
                  </div>
                  <div className="col-sm-6">
                     <button
                        className="btn btn-danger"
                        onClick={() => props.updateDb(candy, DECREMENT)}
                     >
                        Decrement Quantity
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   } else {
      return <h1>Page not found!</h1>;
   }
};

const mapDispatchToProps = dispatch => {
   return {
      updateDb: function(id, type) {
         dispatch(updateDb(id, type));
      },
   };
};

export default connect(
   null,
   mapDispatchToProps,
)(SingleCandyView);
