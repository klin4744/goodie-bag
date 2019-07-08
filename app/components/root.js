import React from 'react';
import CandiesList from './CandiesList';
import SingleCandyView from './SingleCandyView';
import Home from './Home';
import NewCandy from './NewCandy';
import Navbar from './Navbar';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCandiesFromDb, createCandy, removeCandy } from '../reducers';

class Root extends React.Component {
   componentDidMount() {
      this.props.getCandies();
   }
   render() {
      return (
         <div>
            <div className="overlay" />
            <Navbar />
            <main>
               <Switch>
                  <Route
                     exact
                     path="/"
                     render={pathProps => <Home {...pathProps} />}
                  />
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
