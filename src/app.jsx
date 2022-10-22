import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import List from './components/list/list';
import Search from './components/search/search';
import Detail from './components/detail/detail';

function App({ youtube }) {
  const [data, setData] = useState([]); //동영상 목록 받아오기
  const [loading, setLoading] = useState(true); //첫화면 데이터 로딩 여부
  const [detail, setDetail] = useState(null); //영상 재생 상세 화면->{id, title, description}

  const onClickVideo = (value) => {
    const id = value.id.videoId ? value.id.videoId : value.id;

    setDetail({
      id,
      title: value.snippet.title,
      description: value.snippet.description,
    });
  };

  const onSearch = useCallback(
    (searchWord) => {
      // 로딩스피너
      youtube
        .search(searchWord) //
        .then((items) => {
          setData((prev) => items);
          setDetail(null);
        });
    },
    [youtube]
  );

  const onClickLogo = useCallback(() => {
    youtube
      .mostPopular() //
      .then((items) => {
        setData(items);
        setDetail(null);
      });
  }, [youtube]);

  useEffect(() => {
    //data 가져오기-> componentDidMount역할
    youtube
      .mostPopular() //
      .then((items) => {
        setData(items);
        setLoading(false);
      });
  }, [youtube]);

  console.log('app.jsx render');

  if (loading) return <h1>Loading........🧐</h1>;
  return (
    <>
      <Search onSearch={onSearch} onClickLogo={onClickLogo} />
      <div className='layout2'>
        {detail && <Detail detail={detail} />}
        <List
          onClickVideo={onClickVideo}
          data={data}
          setDetail={setDetail}
          detail={detail}
        />
      </div>
    </>
  );
}

export default App;
