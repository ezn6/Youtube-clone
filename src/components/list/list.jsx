import React, { memo } from 'react';
import Video from '../video/video.jsx';
import styles from './list.module.css';
import classnames from 'classnames/bind';

const List = memo(({ onClickVideo, data, setDetail, detail }) => {
  console.log('list.jsx render');

  let cx = classnames.bind(styles);
  let className = cx({
    list: true,
    width: detail,
  });

  return (
    <ul className={className}>
      {data.map((value) => (
        <Video
          key={value.etag}
          value={value}
          setDetail={setDetail}
          detail={detail}
          onClickVideo={onClickVideo}
        />
      ))}
    </ul>
  );
});

export default List;
List.displayName = 'List';
