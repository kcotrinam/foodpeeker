/* eslint-disable no-unused-vars */
import { Box, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMealList } from '../actions';
import MealCard from '../components/MealCard';

const MealList = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.mealList);

  useEffect(() => {
    dispatch(fetchMealList(name));
  }, [dispatch]);

  const renderMeals = () => {
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    return meals.map((meal) => (
      <MealCard
        key={Math.random()}
        image={meal.strMealThumb}
        name={meal.strMeal}
        id={meal.idMeal}
      />
    ));
  };

  return (
    <Box width={{ md: '80vw' }} mx="auto">
      <Grid
        templateColumns={{ base: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(4,1fr)' }}
        gap={3}
      >
        {renderMeals()}
      </Grid>
    </Box>
  );
};

export default MealList;
