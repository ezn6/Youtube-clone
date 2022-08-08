import React, { memo } from 'react';
import Video from '../video/video.jsx';
import styles from './list.module.css';

const List = memo(({ data, setDetail }) => {
  console.log('list.jsx render');

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.map((value) => (
          <Video key={value.etag} value={value} setDetail={setDetail} />
        ))}
      </ul>
    </div>
  );
});

export default List;
List.displayName = 'List';
