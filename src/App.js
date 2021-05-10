import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchCategories from './actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return <h1>hello!</h1>;
};

export default App;
