/* eslint-disable */
import { StarIcon } from '@chakra-ui/icons';
import { Box, Button, Image, SlideFade } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function MealCard({ image, name, id, loading }) {
  const property = {
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={2}>
      <SlideFade in={!loading} offsetY="20px">
        <Image src={image} alt={property.imageAlt} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={Math.random()}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
          </Box>
        </Box>
        <Button size="xs" width="100%" variant="solid">
          <Link to={`/${id}`} id={id}>
            Read Recipe
          </Link>
        </Button>
      </SlideFade>
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
