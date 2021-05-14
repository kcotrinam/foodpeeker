/* eslint-disable object-curly-newline */
import { Box, Center, Flex, Grid, Menu, MenuItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Grid>
      <Box bg="red">
        <Center>
          <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold">
            FOODKEEPER
          </Text>
        </Center>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)">
        <Flex justifyContent="center">
          <Link to="/">
            <MenuItem mx="auto">Home</MenuItem>
          </Link>
        </Flex>
        <Flex justifyContent="center">
          <Link to="/categories">
            <MenuItem>Categories</MenuItem>
          </Link>
        </Flex>
        <Flex justifyContent="center">
          <Link to="/countries">
            <MenuItem>countries</MenuItem>
          </Link>
        </Flex>
      </Grid>
    </Grid>
  </Menu>
);

export default Navbar;
