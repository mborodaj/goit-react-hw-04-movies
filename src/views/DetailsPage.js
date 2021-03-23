import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import getMoviesData from '../Services/Movies-API';

const Cast = lazy(() =>
  import('../Components/Cast/Cast.js' /* webpackChunkName: "cast-page" */),
);

const Reviews = lazy(() =>
  import('../Components/Reviews/Reviews' /* webpackChunkName: "revies-page" */),
);

class DetailsPage extends Component {
  state = {
    filmDetails: {},
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    getMoviesData.getDetails(moviesId).then(filmDetails => {
      this.setState({ filmDetails });
    });
  }

  onBackClick = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  render() {
    console.log(this.state);
    const {
      original_title,
      poster_path,
      title,
      vote_average,
      overview,
      genres,
    } = this.state.filmDetails;

    const { match, location } = this.props;
    console.log(this.props);

    return (
      <div className="detailsPage">
        <button className="backBtn" type="button" onClick={this.onBackClick}>
          Back
        </button>

        <div className="detailsContainer">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          ></img>
          <div className="infoBlock">
            <h2>{title}</h2>
            <p>User score: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres &&
                genres.map((genre, id) => {
                  return <li key={id}>{genre.name}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className="additionalInfo">
          <h3>Additional information</h3>
          <ul className="infoList">
            <li className="infoItem">
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...location.state },
                }}
                className="link"
              >
                Casts
              </NavLink>
            </li>
            <li className="infoItem">
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { ...location.state },
                }}
                className="link"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={'Please wait...'}>
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default DetailsPage;
