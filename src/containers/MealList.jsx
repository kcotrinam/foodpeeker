import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMealList } from '../actions';
import FilterInput from '../components/FilterInput';
import MealCard from '../components/MealCard';
import Loader from '../components/shared/Loader';

const MealList = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.mealList);
  const textFilter = useSelector((state) => state.wordFilter);

  useEffect(() => {
    dispatch(fetchMealList(name));
  }, [dispatch]);

  const filteredMeals = () => {
    if (textFilter) {
      return meals.filter((meal) => meal.strMeal.toLowerCase().includes(textFilter.toLowerCase()));
    }
    return meals;
  };

  const renderMeals = () => {
    if (loading) {
      return (
        <GridItem colSpan={4}>
          <Loader />
        </GridItem>
      );
    }
    if (error) return <h1>Error...</h1>;

    return filteredMeals().map((meal) => (
      <MealCard
        key={Math.random()}
        image={meal.strMealThumb}
        name={meal.strMeal}
        id={meal.idMeal}
        loading={loading}
      />
    ));
  };

  return (
    <Box width={{ md: '80vw' }} mx="auto">
      <FilterInput />
      <Grid
        templateColumns={{
          base: '1fr 1fr',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4,1fr)',
        }}
        gap={3}
      >
        {renderMeals()}
      </Grid>
    </Box>
  );
};

export default MealList;
