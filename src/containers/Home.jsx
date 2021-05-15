import { Box, Center, Text } from '@chakra-ui/react';
import bgImage from '../assets/images/food.jpg';

const Home = () => (
  <>
    <Box
      pos="relative"
      bg={`url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box pos="absolute" w="100%" h="100%" top="0" bg="rgba(0,0,0,0.8)" />
      <Center h="100%">
        <Text fontSize="5xl" pos="relative" fontWeight="bold" color="gray.300">
          Food Peeker
        </Text>
      </Center>
    </Box>
  </>
);

export default Home;
