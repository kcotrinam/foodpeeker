import {
  Badge,
  Box,
  Center,
  Container,
  Image,
  Stack,
  Text,
  OrderedList,
  Link,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import IngredientItem from './IngredientItem';

function RecipeCard({
  title,
  img,
  description,
  category,
  area,
  ingredients,
  meassurements,
  source,
}) {
  const renderingredientItems = () => ingredients.map((ingredient, idx) => (
    <IngredientItem
      key={Math.random()}
      ingredient={ingredient}
      meassurement={meassurements[idx]}
    />
  ));

  return (
    <Container backgroundColor="#fff" borderTopRadius="lg">
      <Box maxW="container.xl" shadow="xl" p={2}>
        <Box>
          <Stack spacing="4" p={2}>
            <Center>
              <Text fontSize={{ base: '2xl', md: '4xl' }}>{title}</Text>
            </Center>
          </Stack>
          <Box>
            <Image src={img} />
          </Box>
          <Box>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {category}
            </Badge>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {area}
            </Badge>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              Ingredients
            </Text>
            <OrderedList>{renderingredientItems()}</OrderedList>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              Instructions
            </Text>
            <Text>{description}</Text>
          </Box>
          <Box align="right">
            <Link href={source} isExternal>
              Source
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

RecipeCard.defaultProps = {
  title: '',
  img: '',
  description: '',
  category: '',
  area: '',
  ingredients: [],
  meassurements: [],
  source: '',
};

RecipeCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  area: PropTypes.string,
  ingredients: PropTypes.arrayOf(String),
  meassurements: PropTypes.arrayOf(String),
  source: PropTypes.string,
};

export default RecipeCard;
