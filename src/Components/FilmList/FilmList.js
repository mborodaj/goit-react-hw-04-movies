import { NavLink } from 'react-router-dom';
import styles from './FilmList.module.css';

function FilmList({ movies, location }) {
  return (
    <ul className={styles.moviesList}>
      {movies &&
        movies.map(({ id, name, original_title, poster_path }) => (
          <li className={styles.movieItem} key={id}>
            <NavLink
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              ></img>
              {name || original_title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default FilmList;
