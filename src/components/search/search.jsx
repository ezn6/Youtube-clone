import React, { memo, useRef } from 'react';
import styles from './search.module.css';

const Search = memo(({ onSearch, onClickLogo }) => {
  const inputRef = useRef();

  const onClick = () => {
    // 로고 클릭하면 메인->popular videos 다시 가져오기
    // setDatail null로 재설정하기
    // 검색창 내용 비우기
    inputRef.current.value = '';
    onClickLogo();
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') return;
    //검색한것 fetch로 받아오기
    onSearch(inputRef.current.value);
  };

  console.log('search.jsx render');

  return (
    <div className={styles.background}>
      <button onClick={onClick} className={styles.button}>
        <img
          className={styles.icon}
          src='http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png'
          alt='youtube_logo'
        />
      </button>
      <span onClick={onClick} className={styles.youtube}>
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
