import React, { Component } from 'react';
import { orderBy } from 'lodash';

import { SearchItem } from './SearchItem';
import styles from './SearchList.module.css';

const orderOptions = [
  { label: 'View count descending', value: 'view_count:desc' },
  { label: 'View count ascending', value: 'view_count:asc' },
  { label: 'Creation date descending', value: 'creation_date:desc' },
  { label: 'Creation date ascending', value: 'creation_date:asc' }
]

export class SearchList extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      sort: '',
    };
  }

  handleChange = type => e => this.setState({ [type]: e.target.value });

  getItems = () => {
    const { search, sort } = this.state;
    const lowerSearch = search.toLowerCase();
    let { items } = this.props;
    if (search) {
      items = items.filter(({ title }) => title.toLowerCase().includes(lowerSearch));
    }
    if (sort) {
      const [attr, order] = sort.split(':');
      items = orderBy(items, [attr], [order]);
    }

    return items;
  };

  render() {
    const { search, sort } = this.state;
    const items = this.getItems();

    return (
      <div className={styles.container}>
        <div className={styles.utils}>
          <select value={sort} onChange={this.handleChange('sort')}>
            <option>Choose a sort order</option>
            {orderOptions.map(({ label, value }) => <option value={value} key={value}>{label}</option>)}
          </select>
          <input
            type="search"
            value={search}
            onChange={this.handleChange('search')}
            placeholder="Type text to filter"
          />
        </div>
        {items.map(item => <SearchItem {...item} key={item.question_id} />)}
      </div>
    );
  }
}
