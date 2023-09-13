import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import classes from './SearchForm.module.css';

const SearchForm: FC = () => {
  return (
    <form className={classes.form}>
      <div className={classes.search}>
        <input
          id='search'
          type='search'
          placeholder='Search Location...'
        />
        <button type='button'>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
