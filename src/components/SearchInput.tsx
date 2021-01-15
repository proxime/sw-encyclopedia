import React, { FormEvent, ChangeEvent, useState } from 'react';

import '../styles/SearchInput.scss';
import searchImg from '../img/search.png';

export interface SearchInputProps {
  onSubmit: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChangeValue}
          name="search"
          placeholder="Search by name"
        />
        <button type="submit">
          <img src={searchImg} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
