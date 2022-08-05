import React, { useState } from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <i class='fa-brands fa-youtube'></i>
      <span>Youtube</span>
      <input
        value={search}
        onChange={onChangeSearch}
        type='text'
        placeholder='Search...'
      />
      <i class='fa-solid fa-magnifying-glass'></i>
    </>
  );
};

export default Search;
