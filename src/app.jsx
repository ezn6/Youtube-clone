import React, { useState, useEffect } from 'react';
import './app.css';
import { config } from './config';
import List from './components/list/list';
import Search from './components/search/search';
import Detail from './components/detail/detail';

function App() {
  const YOUTUBE_API_KEY = config.key;
  const [data, setData] = useState([]); //동영상 목록 받아오기
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(true); //영상 재생 화면
  const [search, setSearch] = useState(''); //검색어

  useEffect(() => {
    //data 가져오기-> componentDidMount역할
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.items)
      .then((items) => {
        setData(items);
        setLoading(false);
      });
  }, [YOUTUBE_API_KEY]);

  console.log('app.jsx render');
  console.log(setDetail);

  if (loading) return <h1>Loading........🧐</h1>;
  return (
    <>
      <Search search={search} setSearch={setSearch} setData={setData} />
      <div className='layout'>
        {detail && <Detail />}
        <List data={data} />
      </div>
    </>
  );
}

export default App;
