import React, { memo, useRef } from 'react';
import styles from './search.module.css';

const Search = memo(({ youtube, setData, setDetail }) => {
  const inputRef = useRef();

  const onClickLogo = () => {
    // 로고 클릭하면 메인->popular videos 다시 가져오기
    //setDatail null로 재설정하기
    youtube
      .mostPopular() //
      .then((items) => {
        setData(items);
        setDetail(null);
        inputRef.current.value = '';
      });
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') return;
    //검색한것 fetch로 받아오기
    youtube
      .search(inputRef.current.value) //
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
