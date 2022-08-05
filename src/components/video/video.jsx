import React, { memo } from 'react';
import About from '../about/about';
import styles from './video.module.css';

const Video = memo(({ value }) => {
  const onClickVideo = () => {
    return <About />;
  };

  console.log('video.jsx render');
  return (
    <li onClick={onClickVideo} className={styles.video}>
      <img
        className={styles.thumbnail}
        src={value.snippet.thumbnails.medium.url}
        alt='thumbnail'
      />
      <div className={styles.titles}>
        <div className={styles.title}>{value.snippet.title}</div>
        <div className={styles.channelTitle}>{value.snippet.channelTitle}</div>
      </div>
    </li>
  );
});

export default Video;
