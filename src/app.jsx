import React, { useState, useEffect } from 'react';
import './app.css';
import List from './components/list/list';
import Search from './components/search/search';
import Detail from './components/detail/detail';

function App({ youtube }) {
  const [data, setData] = useState([]); //동영상 목록 받아오기
  const [loading, setLoading] = useState(true); //첫화면 데이터 로딩 여부
  const [detail, setDetail] = useState(null); //영상 재생 상세 화면->{id, title, description}

  useEffect(() => {
    //data 가져오기-> componentDidMount역할
    youtube
      .mostPopular() //
      .then((items) => {
        setData(items);
        setLoading(false);
      });
  }, []);

  console.log('app.jsx render');

  if (loading) return <h1>Loading........🧐</h1>;
  return (
    <div className='layout1'>
      <Search youtube={youtube} setData={setData} setDetail={setDetail} />
      <div className='layout2'>
        {detail && <Detail detail={detail} />}
        <List data={data} setDetail={setDetail} detail={detail} />
      </div>
    </div>
  );
}

export default App;
