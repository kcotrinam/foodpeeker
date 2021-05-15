/* eslint-disable */
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Input, ScaleFade } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAction } from '../actions';

function FilterInput() {
  const [filter, setFilter] = useState(false);
  const value = useRef('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(filterAction(target.value));
  };

  useEffect(() => {
    const closeFilter = (e) => {
      if (e.keyCode === 27) {
        setFilter((prev) => !prev);
      }
    };
    window.addEventListener('keydown', closeFilter);

    return () => window.removeEventListener('keydown', closeFilter);
  });

  const handleClick = () => {
    setFilter((prev) => !prev);
    dispatch(filterAction(''));
  };

  const renderFilterInput = () => {
    if (!filter) {
      return <SearchIcon onClick={handleClick} />;
    }
    return (
      <Box w="80vw" mx="auto" d="flex">
        <ScaleFade initialScale={0.9} in={filter}>
          <Input
            ref={value}
            onChange={handleChange}
            placeholder="Type the name"
            size="sm"
          />
        </ScaleFade>
        <Box pl={2}>
          <CloseIcon w={3} h={3} onClick={handleClick} />
        </Box>
      </Box>
    );
  };

  return <Box p={3}>{renderFilterInput()}</Box>;
}

export default FilterInput;
