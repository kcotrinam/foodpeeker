/* eslint-disable object-curly-newline */
import { Box, Grid, Menu, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Grid templateColumns="repeat(3, 1fr)">
      <Box bg="tomato">
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
      </Box>
      <Box bg="tomato">
        <MenuItem>
          <Link to="/categories">Categories</Link>
        </MenuItem>
      </Box>
      <Box bg="tomato">
        <MenuItem>
          <Link to="/countries">countries</Link>
        </MenuItem>
      </Box>
    </Grid>
  </Menu>
);

export default Navbar;
