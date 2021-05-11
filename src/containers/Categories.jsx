import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchCategories from '../actions';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h2>Categories</h2>
    </div>
  );
};

export default Categories;
