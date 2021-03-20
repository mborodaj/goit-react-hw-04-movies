import React, { Component } from 'react';
import MoviesPage from '../Components/MoviesPage/MoviesPage';
// import FoundFilms from '../components/FoundFilms';
import fetchMovies from '../Services/Movies-API';

class HomePage extends Component {
  state = {
    results: null,
  };

  async componentDidMount() {
    console.log('mounted');

    fetchMovies().then(results => this.setState({ results }));
  }

  render() {
    console.log('rendered');
    const { results } = this.state;
    console.log(results);
    return (
      <div>
        <MoviesPage movies={results} />
      </div>
    );
  }
}

export default HomePage;
