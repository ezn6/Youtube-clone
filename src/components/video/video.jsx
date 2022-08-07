import React, { memo } from 'react';
import styles from './video.module.css';

const Video = memo(({ value, setDetail }) => {
  const onClickVideo = () => {
    //id값 설정하기
    // setDetail 에 obj로 id, description 보내기
    const id = value.id.videoId ? value.id.videoId : value.id;
    console.log(`id값 확인: ${id}`);
    setDetail({ id, description: value.snippet.description });
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
Video.displayName = 'Video';
