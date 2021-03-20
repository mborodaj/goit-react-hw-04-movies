import baseCss from './base.module.css';
import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar/Navbar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback="loading">
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Suspense>

        {/* <Route path="/movies" exact component={MoviesPage} />
            <Route path="/movies/:moviesId" component={MoviesDetailsPage} /> */}
      </>
    );
  }
}

export default App;
