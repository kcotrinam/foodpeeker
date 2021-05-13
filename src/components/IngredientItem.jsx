import { Box, ListItem } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

function IngredientItem({ ingredient, meassurement }) {
  return (
    <ListItem>
      {`${ingredient}: `}
      <Box as="span" m={6}>
        {meassurement}
      </Box>
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
