import React, { memo, useRef } from 'react';
import { config } from '../../config';
import styles from './search.module.css';

const Search = memo(({ setData, setDetail }) => {
  const YOUTUBE_API_KEY = config.key;
  const inputRef = useRef();

  const onClickLogo = () => {
    // 로고 클릭하면 메인->popular videos 다시 가져오기
    //setDatail null로 재설정하기
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => data.items)
      .then((items) => {
        setData(items);
        setDetail(null);
        inputRef.current.value = '';
      });
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();

    if (inputRef.current.value === '') return;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    //검색한것 fetch로 받아오기
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&regionCode=KR&q=${inputRef.current.value}&key=${YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => data.items)
      .then((items) => {
        setData((prev) => items);
        setDetail(null);
      });
  };

  console.log('search.jsx render');

  return (
    <div className={styles.background}>
      <button onClick={onClickLogo} className={styles.button}>
        <img
          className={styles.icon}
          src='http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png'
          alt='youtube_logo'
        />
      </button>
      <span onClick={onClickLogo} className={styles.youtube}>
        Youtube
      </span>

      <form className={styles.form} onSubmit={onSubmitSearch}>
        <input
          className={styles.searchInput}
          ref={inputRef}
          type='search'
          placeholder='Search...'
        />
        <button className={styles.button2}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
    </div>
  );
});

export default Search;
Search.displayName = 'Search';
