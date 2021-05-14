import { Box, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../actions';
import Default from '../assets/images/maps/Default.png';
import Card from '../components/Card';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const renderCountries = () => {
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error.</h1>;

    return countries.map((country) => (
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
    <Box as="div" w="100%" bg="#2B6CB0">
      <Grid
        templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }}
        w={{ md: '80vw' }}
        gap={3}
        mx="auto"
      >
        {renderCountries()}
      </Grid>
    </Box>
  );
};
export default Countries;
