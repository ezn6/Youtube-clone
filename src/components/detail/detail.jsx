import React, { memo } from 'react';
import styles from './detail.module.css';

const Detail = memo(({ detail }) => {
  console.log('detail.jsx render');

  return (
    <div className={styles.layout}>
      <iframe
        title={detail.id}
        id='ytplayer'
        type='text/html'
        width='720'
        height='405'
        src={`https://www.youtube.com/embed/${detail.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h2>{detail.title}</h2>
      <div>{detail.description}</div>
    </div>
  );
});

export default Detail;
Detail.displayName = 'Detail';
