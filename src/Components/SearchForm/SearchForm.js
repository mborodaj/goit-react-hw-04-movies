import { logRoles } from '@testing-library/dom';
import { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    console.log(query);
    const { onSubmit } = this.props;
    console.log(this.props.onSubmit);

    if (query.trim() === '') {
      return;
    }
    onSubmit(query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <div className={styles.searchContainer}>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            className={styles.inputForm}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
