import React from 'react';
import { unescape } from 'lodash'

import styles from './SearchItem.module.css';

export const SearchItem = props => {
  const {
    title,
    score,
    link,
    creation_date,
    tags,
    owner: { profile_image, display_name, reputation, link: ownerLink }
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {profile_image &&  (
          <a href={ownerLink}>
            <img src={profile_image} alt={display_name} className={styles.image} />
          </a>
        )}
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>
          {unescape(title)}
          <span> | Score {score}</span>
        </h3>
        <div className={styles.meta}>
          <span>{new Date(creation_date*1000).toDateString()}</span>
          <span>Reputation: {reputation}</span>
          <span>{display_name}</span>
        </div>
        <div>Link to owner: {ownerLink}</div>
        <div>Link to question: {link}</div>
        {tags.length && (
          <div className={styles.tags}>
            {'Tags: '}
            {tags.join(', ')}
          </div>
        )}
      </div>
    </div>
  )
};
