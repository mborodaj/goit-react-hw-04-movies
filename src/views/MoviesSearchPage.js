import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import SearchForm from '../Components/SearchForm/SearchForm';
import getMoviesData from '../Services/Movies-API';

const FilmList = lazy(() =>
  import(
    '../Components/FilmList/FilmList' /* webpackChunkName: "film-list-page" */
  ),
);

class MovieSearchPage extends Component {
  state = {
    query: '',
    searchResult: [],
  };

  componentDidMount() {
    const { pathname, search } = this.props.location;

    console.log(this.props);

    if (pathname && search) {
      this.setState({ query: search.slice(7) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = prevState;
    const { query: currentQuery } = this.state;

    if (prevQuery !== currentQuery) {
      this.searchMovies(currentQuery);
    }
  }

  searchMovies(query) {
    getMoviesData
      .getMovies(query)
      .then(result => {
        this.setState({ searchResult: result });
      })
      .catch(error => console.log(error));
  }

  onFormSubmit = currentQuery => {
    console.log(currentQuery);
    const { history, location } = this.props;

    this.setState({ query: currentQuery.toLowerCase() });
    console.log(this.state.query);
    history.push({ ...location, search: `query=${currentQuery.trim()}` });
  };

  render() {
    const { query, searchResult } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onFormSubmit} />
        <div>
          {searchResult && (
            <Suspense fallback={'Please wait...'}>
              <Route
                to={`/movies/query=${query}`}
                render={props => <FilmList movies={searchResult} {...props} />}
              />
            </Suspense>
          )}
        </div>
      </div>
    );
  }
}

export default MovieSearchPage;
