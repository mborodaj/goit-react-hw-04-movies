import { NavLink } from 'react-router-dom';
import styles from './MoviesPage.module.css';

function renderMovies({ movies }) {
  return (
    <>
      <h2>Trending movies</h2>
      <ul className={styles.moviesList}>
        {movies &&
          movies.map(movie => (
            <li className={styles.moviesItem} key={movie.id}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              ></img>
              {movie.title}
            </li>
          ))}
      </ul>
    </>
  );
}
export default renderMovies;
