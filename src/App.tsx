import { ChakraProvider, theme } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import router from './routes';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  );
};
