import React from 'react';

export default function Home(props) {
   return (
      <div className=" home-display w-100 text-white ">
         <div className="jumbotron w-50 mx-auto m-5 jum-1">
            <div className="container m-5 p-5">
               <h1 className="display-3">Welcome to the Goodie Bag!</h1>
               <p className="lead">A collection of goodies!</p>
               <button
                  onClick={() => props.history.push('/candies')}
                  className="btn btn-outline-light "
               >
                  Look at some candies
               </button>
            </div>
         </div>
      </div>
   );
}
