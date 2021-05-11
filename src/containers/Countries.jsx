/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../actions';
import Default from '../assets/images/maps/Default.png';
import Card from '../components/Card';

const Countries = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const renderCountries = () =>
    countries.map((country) => (
      <Card
        key={country.strArea}
        name={country.strArea}
        img={Default}
        imgAlt="Image of the country showed"
      />
    ));

  return (
    <>
      <Flex wrap="wrap" display="flex" w="100%">
        {renderCountries()}
      </Flex>
    </>
  );
};
export default Countries;
