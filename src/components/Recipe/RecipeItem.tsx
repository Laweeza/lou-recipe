import { Box, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

import { RecipeProps } from './Recipe.types';

const RecipeItem = ({ id, title, category, directions, ingredients, imageUrl }: RecipeProps) => (
  <Card shadow='md' bg={'white'}>
    <h2>
      <CardHeader>
        <Heading size='md'>{title}</Heading>
      </CardHeader>
    </h2>
    <CardBody>{directions}</CardBody>
  </Card>
);

export default RecipeItem;
