/* eslint-disable  */
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../actions';
import Default from '../assets/images/maps/Default.png';
import Card from '../components/Card';
import FilterInput from '../components/FilterInput';
import Loader from '../components/shared/Loader';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);
  const textFilter = useSelector((state) => state.wordFilter);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = () => {
    if (textFilter) {
      return countries.filter((count) =>
        count.strArea.toLowerCase().includes(textFilter.toLowerCase()),
      );
    }
    return countries;
  };

  const renderCountries = () => {
    if (loading) {
      return (
        <GridItem colSpan={4}>
          <Loader />
        </GridItem>
      );
    }
    if (error) return <h1>Error.</h1>;

    return filteredCountries().map((country) => (
      <Box key={Math.random()}>
        <Link to={`/countries/a=${country.strArea}`}>
          <Card
            key={country.strArea}
            name={country.strArea}
            img={Default}
            imgAlt="Image of the country showed"
          />
        </Link>
      </Box>
    ));
  };

  return (
    <Box as="div" w="100%" bg="gray.200" p={2}>
      <FilterInput />
      <Grid
        templateColumns={{
          base: 'repeat(2,1fr)',
          md: 'repeat(3,1fr)',
          lg: 'repeat(4,1fr)',
        }}
        w={{ md: '80vw' }}
        gap={3}
        mx="auto"
        minWidth="80vw"
        minHeight="100vh"
      >
        {renderCountries()}
      </Grid>
    </Box>
  );
};
export default Countries;
