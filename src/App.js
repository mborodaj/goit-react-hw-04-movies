import './base.css';
import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar/Navbar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesSearchPage = lazy(() =>
  import(
    './views/MoviesSearchPage' /* webpackChunkName: "movie-search-page" */
  ),
);

const DetailsPage = lazy(() =>
  import('./views/DetailsPage' /* webpackChunkName: "details-page" */),
);

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback="loading">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesSearchPage} />
            <Route path="/movies/:moviesId" component={DetailsPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
