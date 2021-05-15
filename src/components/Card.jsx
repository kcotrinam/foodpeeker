/* eslint-disable */
import PropTypes from 'prop-types';
import { Box, Image, ScaleFade, Text } from '@chakra-ui/react';

const Card = ({ name, img, imgAlt, loading }) => (
  <ScaleFade initialScale={0.9} in={!loading}>
    <Box w="100%" position="relative" bg="#fff" boxShadow="xl">
      <Box>
        <Image src={img} alt={imgAlt} w="100%" />
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0,0,0,0.5)"
        borderRadius={4}
      />
      <Box minH="50%" position="absolute" bottom="0" right="15%">
        <Text textAlign="right" fontSize="lg" fontWeight="bold" color="gray.50">
          {name}
        </Text>
      </Box>
    </Box>
  </ScaleFade>
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
