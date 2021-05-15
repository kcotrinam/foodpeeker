import { Input, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterAction } from '../actions';

function FilterInput() {
  const value = useRef('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(filterAction(target.value));
    console.log(target.value);
  };

  return (
    <>
      <Text mb="8px">Type the name</Text>
      <Input
        ref={value}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
}

export default FilterInput;
