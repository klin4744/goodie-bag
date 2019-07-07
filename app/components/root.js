import React from 'react';
import CandiesList from './CandiesList';
import { NavLink as Link, Route, Switch, withRouter } from 'react-router-dom';
import SingleCandyView from './SingleCandyView';
import Home from './Home';
import { connect } from 'react-redux';
import { getCandiesFromDb } from '../reducers';

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
                  <Link activeClassName="active" to="/candies">
                     Candies
                  </Link>
               </div>
            </nav>
            <main>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                     exact
                     path="/candies"
                     render={() => <CandiesList candies={this.props.candies} />}
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
   };
};
export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps,
   )(Root),
);
