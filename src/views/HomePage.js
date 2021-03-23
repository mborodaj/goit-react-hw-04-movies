import React, { Component } from 'react';
import MoviesPage from '../Components/MoviesPage/MoviesPage';
// import FoundFilms from '../components/FoundFilms';
import getMoviesData from '../Services/Movies-API';

class HomePage extends Component {
  state = {
    results: null,
  };

  async componentDidMount() {
    getMoviesData.fetchData().then(results => this.setState({ results }));
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <MoviesPage movies={results} {...this.props} />
      </div>
    );
  }
}

export default HomePage;
