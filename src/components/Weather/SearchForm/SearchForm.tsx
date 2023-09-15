import { FC, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

import { validateSearch } from '@/utils/helpers/validateSearch';
import {
  invalidTextVariants,
  searchFormBtnVariants,
} from './SearchForm.variants';
import classes from './SearchForm.module.css';

export interface SearchFormProps {
  onSearch: (city: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [invalid, setInvalid] = useState(false);
  const animateController = useAnimationControls();

  const searchHandler = () => {
    const searchText = inputRef.current!.value;

    const isValid = validateSearch(searchText);

    if (!isValid) {
      animateController.start(invalidTextVariants.animate);
      setInvalid(() => true);
      return;
    }

    setInvalid(false);

    onSearch(searchText);
  };

  const keydownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchHandler();
    }
  };

  useEffect(() => {
    if (invalid) {
      animateController.start(invalidTextVariants.animate);
    }
  }, [invalid]);

  return (
    <form className={classes.form}>
      <div className={classes.search}>
        <input
          ref={inputRef}
          key={invalid.toString()}
          id='search'
          type='search'
          placeholder='Search For a City'
          onKeyDown={keydownHandler}
          aria-label='City Search'
          style={invalid ? { outline: '2px solid red' } : { outline: 'none' }}
        />

        <AnimatePresence>
          {invalid && (
            <motion.p
              variants={invalidTextVariants}
              animate={animateController}
              exit='exit'
            >
              Please enter valid city name !
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          variants={searchFormBtnVariants}
          whileHover={'hover'}
          whileTap={'tap'}
          type='button'
          onClick={searchHandler}
        >
          <FaSearch />
        </motion.button>
      </div>
    </form>
  );
};

export default SearchForm;
