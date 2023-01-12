import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
} from '@chakra-ui/react';

import { RecipeProps } from './Recipe.types';

const RecipeItem = ({
  id,
  title,
  category,
  description,
  directions,
  ingredients,
  nutrition,
  imageUrl,
}: RecipeProps) => (
  <Card shadow='md' bg={'white'} flex={1} minW={'320px'}>
    <LinkBox>
      <CardBody>
        <Flex gap={2} flexDir={'column'}>
          {/* <Image src='' alt='' borderRadius='lg' /> */}
          <Skeleton h={'240px'} />
          <Heading size='md' onClick={() => alert('clicked')} cursor={'pointer'}>
            <LinkOverlay>
              <Text size='sm'>{title}</Text>
            </LinkOverlay>
          </Heading>
          {/* <Text mb='3'>{description}</Text> */}
          <Text>Total: {nutrition?.serving} g</Text>
          <Text>Calories: {nutrition?.calories} kcal</Text>
          <Text>Protein: {nutrition?.protein} g</Text>
        </Flex>
      </CardBody>
    </LinkBox>
  </Card>
);

export default RecipeItem;
