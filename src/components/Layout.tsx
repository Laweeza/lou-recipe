import { ReactNode } from 'react';
import { Box, Flex, Heading, Icon, IconButton } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Flex align='center' justify='start' h='100vh' w={'100vw'} flexDir={'column'} bg={'#fafafa'}>
      <Box shadow={'base'} w={'100%'} p={4} zIndex={1} bg={'white'}>
        <Heading>Toodalou's Recipes</Heading>
      </Box>

      {pathname !== '/' && (
        <IconButton
          icon={<Icon as={MdArrowBack} />}
          aria-label={''}
          onClick={() => navigate(-1)}
          alignSelf={'start'}
          size={'lg'}
        />
      )}
      <Box maxW='1440px' pt={4} pb={4} h={'100%'} overflow={'scroll'}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
