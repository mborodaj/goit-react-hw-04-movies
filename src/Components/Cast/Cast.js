import { Component } from 'react';
import getMoviesData from '../../Services/Movies-API';
import styles from './Cast.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    console.log(this.props.match.params);
    getMoviesData.getCast(moviesId).then(cast => {
      this.setState({ cast });
    });
  }

  render() {
    const { cast } = this.state.cast;

    return (
      <div className="container">
        <ul className={styles.castList}>
          {cast &&
            cast.map(({ name, character, profile_path }) => {
              return (
                <li className={styles.castItem} key={shortid.generate()}>
                  <img
                    className={styles.castPhoto}
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  />
                  <h4>{name}</h4>
                  <p>{character}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

Cast.propTypes = {
  moviesId: PropTypes.string,
};

export default Cast;
