/* eslint-disable object-curly-newline */
import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../actions';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/shared/Loader';

function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info, meassurements, ingredients, loading, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipe(id));
  }, [dispatch]);

  const renderRecipe = () => {
    if (loading) return <Loader />;
    if (error) return <h1>Error...</h1>;

    return (
      <Box as="div" width="100%" backgroundColor="gray.100" p={4}>
        <RecipeCard
          title={info.strMeal}
          img={info.strMealThumb}
          description={info.strInstructions}
          category={info.strCategory}
          area={info.strArea}
          ingredients={ingredients}
          meassurements={meassurements}
          source={info.strSource}
        />
      </Box>
    );
  };

  return <div>{renderRecipe()}</div>;
}

export default Recipe;
