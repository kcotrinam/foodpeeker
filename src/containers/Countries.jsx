import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../actions';

const Countries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  });

  return <h2>Countries</h2>;
};
export default Countries;
