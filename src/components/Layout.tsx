import { ReactNode } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex align='center' justify='start' h='100vh' w={'100vw'} flexDir={'column'} bg={'#E4FDE7'}>
      <Box shadow={'base'} w={'100%'} p={4} zIndex={1} bg={'white'}>
        <Heading>Toodalou's Recipes</Heading>
      </Box>
      <Box maxW='1440px' pt={4} pb={4} h={'100%'} bg={'#E4FDE7'} overflow={'scroll'}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
