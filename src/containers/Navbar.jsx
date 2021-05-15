import {
  Box,
  Center,
  Flex,
  Grid,
  Menu,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Grid bg="#319795">
      <Box p={2}>
        <BrowserRouter>
          <Link to="/">
            <Center>
              <Text
                fontSize={{ base: '2xl', md: '5xl' }}
                fontWeight="bold"
                color="gray.300"
              >
                FOODKEEPER
              </Text>
            </Center>
          </Link>
        </BrowserRouter>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)">
        <Flex justifyContent="center" bg="#4FD1C5">
          <BrowserRouter>
            <Link to="/">
              <MenuItem mx="auto" fontWeight="bold" color="gray.600">
                Home
              </MenuItem>
            </Link>
          </BrowserRouter>
        </Flex>
        <Flex justifyContent="center" bg="#4FD1C5">
          <BrowserRouter>
            <Link to="/categories">
              <MenuItem fontWeight="bold" color="gray.600">
                Categories
              </MenuItem>
            </Link>
          </BrowserRouter>
        </Flex>
        <Flex justifyContent="center" bg="#4FD1C5">
          <BrowserRouter>
            <NavLink to="/countries">
              <MenuItem fontWeight="bold" color="gray.600">
                Countries
              </MenuItem>
            </NavLink>
          </BrowserRouter>
        </Flex>
      </Grid>
    </Grid>
  </Menu>
);

export default Navbar;
