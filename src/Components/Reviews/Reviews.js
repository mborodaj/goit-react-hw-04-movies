import { Component } from 'react';
import getMoviesData from '../../Services/Movies-API';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { moviesId } = this.props.match.params;
    getMoviesData
      .getReviews(moviesId)
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    return (
      <div className="container">
        <ul className={styles.reviewList}>
          {this.state.reviews &&
            this.state.reviews.map(({ id, author, content, created_at }) => {
              return (
                <li className={styles.reviewItem} key={id}>
                  <h4>{author}</h4>
                  <p>{created_at}</p>
                  <p>{content}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Reviews;
