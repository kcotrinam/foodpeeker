import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Box w={{ base: '50%', md: '33.333%' }} key={category.idCategory}>
        <Link
          to={`/categories/c=${category.strCategory}`}
          name={category.strCategory}
          key={category.idCategory}
        >
          <Card
            name={category.strCategory}
            img={category.strCategoryThumb}
            imgAlt={category.strCategoryDescription}
          />
        </Link>
      </Box>
    ));
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {renderCategories()}
    </Flex>
  );
};

export default Categories;
