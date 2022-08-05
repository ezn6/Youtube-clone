import React, { useEffect, useState } from 'react';
import Video from '../video/video.jsx';
import { config } from '../../config.js';
import styles from './list.module.css';

const List = (props) => {
  const YOUTUBE_API_KEY = config.key;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //data 가져오기-> componentDidMount역할
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.items)
      .then((itmes) => {
        setData(itmes);
        setLoading(false);
      });
  }, [YOUTUBE_API_KEY]);

  console.log('list.jsx render');

  if (loading) return <div>Loading........🧐</div>;
  return (
    <div className={styles.container}>
      {/* {test && <div>{test}</div>} */}
      <ul className={styles.list}>
        {data.map((value) => (
          <Video key={value.id} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default List;
