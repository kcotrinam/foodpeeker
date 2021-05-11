import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../actions';
import Card from '../components/Card';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategories = () => {
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error.</h1>;

    return categories.map((category) => (
      <Card
        key={category.idCategory}
        name={category.strCategory}
        img={category.strCategoryThumb}
        imgAlt={category.strCategoryDescription}
      />
    ));
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {renderCategories()}
    </Flex>
  );
};

export default Categories;
