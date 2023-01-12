import { ReactNode } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex align='center' justify='start' h='100vh' w={'100vw'} flexDir={'column'}>
      <Box shadow={'base'} w={'100%'} p={4} zIndex={1}>
        <Heading>Toodalou's Recipes</Heading>
      </Box>
      <Box w='1440px' pt={4} bg={'#E4FDE7'} h={'100%'}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
