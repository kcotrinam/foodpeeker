/* eslint-disable object-curly-newline */
/* eslint-disable  */
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions';
import Card from '../components/Card';
import Loader from '../components/shared/Loader';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);
  const textFilter = useSelector((state) => state.wordFilter);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const filteredCategories = () => {
    if (textFilter) {
      return categories.filter((cat) =>
        cat.strCategory.toLowerCase().includes(textFilter.toLowerCase()),
      );
    }
    return categories;
  };

  const renderCategories = () => {
    if (loading) {
      return (
        <GridItem colSpan={4}>
          <Loader />
        </GridItem>
      );
    }
    if (error) return <h1>Error.</h1>;

    return filteredCategories().map((category) => (
      <Box key={Math.random()} borderRadius="md">
        <Link
          to={`/categories/c=${category.strCategory}`}
          name={category.strCategory}
          key={category.idCategory}
        >
          <Card
            name={category.strCategory}
            img={category.strCategoryThumb}
            imgAlt={category.strCategoryDescription}
            loading={loading}
          />
        </Link>
      </Box>
    ));
  };

  return (
    <Box as="div" w="100%" bg="gray.200" p={3} minH="100vh">
      <Grid
        templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }}
        w={{ md: '80vw' }}
        gap={3}
        mx="auto"
        minWidth="80vw"
        minHeight="100vh"
      >
        {renderCategories()}
      </Grid>
    </Box>
  );
};

export default Categories;
