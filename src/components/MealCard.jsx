import { StarIcon } from '@chakra-ui/icons';
import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ image, name, id }) {
  const property = {
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={property.imageAlt} />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {name}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={Math.random()} color={i < property.rating ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            <Link to={`/${id}`} id={id}>
              Read Recipe
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MealCard.defaultProps = {
  image: '',
  name: '',
  id: '',
};

MealCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default MealCard;
