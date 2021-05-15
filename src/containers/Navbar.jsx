import {
  Box,
  Center,
  Flex,
  Grid,
  Menu,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Grid bg="#319795">
      <Box p={2}>
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
      </Box>
      <Grid templateColumns="repeat(3, 1fr)">
        <Flex justifyContent="center" bg="#4FD1C5">
          <Link to="/">
            <MenuItem mx="auto" fontWeight="bold" color="gray.600">
              Home
            </MenuItem>
          </Link>
        </Flex>
        <Flex justifyContent="center" bg="#4FD1C5">
          <Link to="/categories">
            <MenuItem fontWeight="bold" color="gray.600">
              Categories
            </MenuItem>
          </Link>
        </Flex>
        <Flex justifyContent="center" bg="#4FD1C5">
          <Link to="/countries">
            <MenuItem fontWeight="bold" color="gray.600">
              countries
            </MenuItem>
          </Link>
        </Flex>
      </Grid>
    </Grid>
  </Menu>
);

export default Navbar;
