import React, { ChangeEvent, useState } from 'react';

import '../styles/SearchInput.scss';

export interface SearchInputProps {
  onSubmit: (value: string) => void;
  search: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSubmit, search }) => {
  const [value, setValue] = useState(search);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSubmit(e.target.value);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={value}
          onChange={handleChangeValue}
          name="search"
          placeholder="Search by name"
        />
      </form>
    </div>
  );
};

export default SearchInput;
