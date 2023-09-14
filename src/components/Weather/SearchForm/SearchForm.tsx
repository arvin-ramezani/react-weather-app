import { FC, KeyboardEventHandler, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import classes from './SearchForm.module.css';
import { validateSearch } from '../../../utils/helpers/validateSearch';

export interface SearchFormProps {
  onSearch: (city: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [invalid, setInvalid] = useState(false);

  const searchHandler = () => {
    const searchText = inputRef.current!.value;

    const isValid = validateSearch(searchText);

    if (!isValid) {
      setInvalid(true);
      return;
    }

    onSearch(searchText);
  };

  const keydownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchHandler();
    }
  };

  return (
    <form className={classes.form}>
      <div className={classes.search}>
        <input
          ref={inputRef}
          id='search'
          type='text'
          placeholder='Search Location...'
          onKeyDown={keydownHandler}
          style={invalid ? { outline: '2px solid red' } : { outline: 'none' }}
        />

        {invalid && <p>Please enter valid city name !</p>}

        <button
          type='button'
          onClick={searchHandler}
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
