/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import { Flex, Box } from '@chakra-ui/react';
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
      <Box w={{ base: '50%', md: '33.333%' }} key={country.srtArea}>
        <Link to={`/countries/a=${country.strArea}`} id={country.strArea}>
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
    <>
      <Flex wrap="wrap" display="flex" w="100%">
        {renderCountries()}
      </Flex>
    </>
  );
};
export default Countries;
