import { Accordion, Flex } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

import { RecipeListProps } from './Recipe.types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <Flex gap={8} px={8}>
      {recipes?.length &&
        recipes.map(({ id, title, category, ingredients, directions, imageUrl }) => (
          <RecipeItem
            id={id}
            title={title}
            category={category}
            ingredients={ingredients}
            directions={directions}
            imageUrl={imageUrl}
          />
        ))}
    </Flex>
  );
};

export default RecipeList;
