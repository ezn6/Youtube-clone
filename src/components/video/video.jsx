import React, { memo } from 'react';
import styles from './video.module.css';
import classnames from 'classnames/bind';

const Video = memo(({ onClickVideo, value, detail }) => {
  const onClick = () => {
    //id값 설정하기
    // setDetail 에 obj로 id, title, description 보내기
    onClickVideo(value);
  };

  console.log('video.jsx render');

  //detail값이 존재한다면 비디오 화면 오른쪽의 영상목록의 width:100%로 채워지게 한다.
  let cx = classnames.bind(styles);
  let className = cx({
    video: true,
    width: detail,
  });

  return (
    <li onClick={onClick} className={className}>
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
