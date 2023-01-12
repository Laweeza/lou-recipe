import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
} from '@chakra-ui/react';

import { RecipeProps } from './Recipe.types';

const RecipeItem = ({ id, title, category, directions, ingredients, imageUrl }: RecipeProps) => (
  <Card shadow='md' bg={'white'} flex={1} minW={'320px'}>
    <CardHeader>
      <Heading size='md' onClick={() => alert('clicked')} cursor={'pointer'}>
        {title}
      </Heading>
    </CardHeader>
    <CardBody>
      <Flex gap={2} flexDir={'column'}>
        {/* <Image src='' alt='' borderRadius='lg' /> */}
        <Skeleton h={'240px'} />
        <Text>{directions}</Text>
      </Flex>
    </CardBody>
  </Card>
);

export default RecipeItem;
