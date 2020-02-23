import React, { Component, createRef } from 'react';

import styles from './SearchBox.module.css';

export class SearchBox extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.state = { search: '' };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = e => this.setState({ search: e.target.value });

  onSearch = () => {
    const { onSearch } = this.props;
    const { search } = this.state;
    return onSearch(search);
  };

  render() {
    const { search } = this.state;

    return (
      <div className={styles.container}>
        <input
          type="search"
          className={styles.input}
          value={search}
          onChange={this.handleChange}
          ref={this.inputRef}
        />
        <button
          className={styles.button}
          onClick={this.onSearch}
        >
          Search
        </button>
      </div>
    );
  }
}
