import React, { useState } from 'react';
import styles from './search.module.css';

const Search = (props) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (search === '') return;
  };

  return (
    <div className={styles.background}>
      <button className={styles.button}>
        <img
          className={styles.icon}
          src='http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png'
          alt='youtube_logo'
        />
      </button>
      <span className={styles.youtube}>Youtube</span>

      <form className={styles.form} onSubmit={onSubmitSearch}>
        <input
          className={styles.searchInput}
          value={search}
          onChange={onChangeSearch}
          type='text'
          placeholder='Search...'
        />
        <button className={styles.button2}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
