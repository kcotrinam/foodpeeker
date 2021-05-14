import { Box, Grid } from '@chakra-ui/react';
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
      <Box key={category.idCategory}>
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
    <Grid
      templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }}
      w={{ md: '80vw' }}
      gap={3}
      mx="auto"
    >
      {renderCategories()}
    </Grid>
  );
};

export default Categories;
