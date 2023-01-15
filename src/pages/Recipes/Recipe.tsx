import { useParams } from 'react-router-dom';
import {
  VStack,
  Flex,
  Text,
  Image,
  Heading,
  Box,
  ListItem,
  List,
  UnorderedList,
  ListIcon,
  Icon,
} from '@chakra-ui/react';

import recipesList from '../../__fixtures__';
import { MdCircle } from 'react-icons/md';
import Layout from '../../components/Layout';

const Recipe = () => {
  const { id } = useParams();
  const recipe = recipesList.find(({ id: recipeId }) => Number(id) === recipeId);

  if (!recipe) {
    return <>not found</>;
  }

  const { title, directions, ingredients, imageUrl } = recipe;
  return (
    <VStack align='start' gap={4}>
      <Box>
        <Heading size='md'>{title}</Heading>
        <Image src={`${window.location.origin}/${imageUrl}`} borderRadius='lg' />
      </Box>
      <Box>
        <Heading size={'sm'}>Ingredients</Heading>
        <List>
          {ingredients.map(({ quantity, name }) => (
            <ListItem key={name} p={0} m={0}>
              <Flex gap={2} align={'center'}>
                <Icon as={MdCircle} fontSize={8} />
                <Text>{quantity}</Text>
                <Text fontStyle={'italic'} fontWeight={'bold'}>
                  {name}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Heading size={'sm'}>Directions</Heading>
        <Text>
          {directions.map(({ order, instruction }) => (
            <Flex gap={1} key={order}>
              <Text>{order}.</Text>
              <Text>{instruction}</Text>
            </Flex>
          ))}
        </Text>
      </Box>
    </VStack>
  );
};

const RecipePage = () => {
  return (
    <Layout>
      <Recipe />
    </Layout>
  );
};

export default RecipePage;
