import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex align='center' justify='center' h='100vh' w={'100vw'}>
      <Box w='1440px'>{children}</Box>
    </Flex>
  );
};

export default Layout;
