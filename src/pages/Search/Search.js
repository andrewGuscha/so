import React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from './SearchBox';
import { Spinner } from './Spinner';
import { SearchList } from './SearchList';
import { doSearch } from './duck';

import styles from './Search.module.css';

export const Search = props => {
  const { loading, loaded, items, doSearch } = props;
  return (
    <div className={styles.container}>
      <SearchBox onSearch={doSearch} />
      {loading && <Spinner />}
      {loaded && <SearchList items={items} />}
    </div>
  );
};

const mapStateToProps = state => state.search;
const mapDispatchToProps = { doSearch };

export default connect(mapStateToProps, mapDispatchToProps)(Search);