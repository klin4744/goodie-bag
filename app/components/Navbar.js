import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function Navbar() {
   return (
      <nav className="navbar navbar-light fixed-top">
         <h1 className="display-4">Goodie Bag</h1>
         <div className="router">
            <Link exact activeClassName="active" to="/">
               Home
            </Link>
            <Link exact activeClassName="active" to="/candies">
               Candies
            </Link>
            <Link activeClassName="active" to="/candies/new">
               Add a Candy
            </Link>
         </div>
      </nav>
   );
}
