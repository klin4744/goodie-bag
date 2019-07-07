import React from 'react';
import CandiesList from './CandiesList';
import { NavLink as Link, Route, Switch, withRouter } from 'react-router-dom';
import SingleCandyView from './SingleCandyView';
import Home from './Home';
import NewCandy from './NewCandy';
import { connect } from 'react-redux';
import { getCandiesFromDb, createCandy, removeCandy } from '../reducers';

class Root extends React.Component {
   componentDidMount() {
      this.props.getCandies();
   }
   render() {
      return (
         <div>
            <nav>
               <h1>Goodie Bag</h1>
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
            <main>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                     exact
                     path="/candies"
                     render={() => (
                        <CandiesList
                           candies={this.props.candies}
                           removeCandy={this.props.removeCandy}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/candies/new"
                     render={routeProps => (
                        <NewCandy
                           candies={this.props.candies}
                           {...routeProps}
                           createCandy={this.props.createCandy}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/candies/:id"
                     render={routeProps => (
                        <SingleCandyView
                           candies={this.props.candies}
                           {...routeProps}
                        />
                     )}
                  />
               </Switch>
            </main>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      candies: state.candies,
   };
};
const mapDispatchToProps = dispatch => {
   return {
      getCandies: () => {
         dispatch(getCandiesFromDb());
      },
      createCandy: candy => {
         dispatch(createCandy(candy));
      },
      removeCandy: candy => {
         dispatch(removeCandy(candy));
      },
   };
};
export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps,
   )(Root),
);
