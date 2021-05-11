import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes/Routes';

const App = () => (
  <ChakraProvider resetCSS>
    <Routes />
  </ChakraProvider>
);

export default App;
