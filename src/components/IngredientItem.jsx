/* eslint-disable  object-curly-newline */
import { Box, Grid, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

function IngredientItem({ ingredient, meassurement }) {
  return (
    <ListItem>
      <Grid templateColumns="0.5fr 0.5fr">
        <Text>{`${ingredient}: `}</Text>
        <Box>{meassurement}</Box>
      </Grid>
    </ListItem>
  );
}

IngredientItem.defaultProps = {
  ingredient: '',
  meassurement: '',
};

IngredientItem.propTypes = {
  ingredient: PropTypes.string,
  meassurement: PropTypes.string,
};

export default IngredientItem;
