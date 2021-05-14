import PropTypes from 'prop-types';
import { Box, Image, Text } from '@chakra-ui/react';

const Card = ({ name, img, imgAlt }) => (
  <Box w="100%" position="relative">
    <Box>
      <Image src={img} alt={imgAlt} w="100%" />
    </Box>
    <Box position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0,0,0,0.5)" />
    <Box minH="50%" position="absolute" bottom="0" right="15%">
      <Text textAlign="right" fontSize="lg" fontWeight="bold" color="gray.50">
        {name}
      </Text>
    </Box>
  </Box>
);

Card.defaultProps = {
  name: '',
  img: '',
  imgAlt: '',
};

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Card;
