import { Flex } from '@chakra-ui/react';

import { RecipeProps } from './Recipe.types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }: { recipes: RecipeProps[] }) => {
  return (
    <Flex gap={8} px={8} flexWrap={'wrap'}>
      {recipes?.length &&
        recipes.map(
          ({ id, title, category, ingredients, description, directions, nutrition, imageUrl }) => (
            <RecipeItem
              key={id}
              id={id}
              title={title}
              category={category}
              ingredients={ingredients}
              description={description}
              directions={directions}
              imageUrl={imageUrl}
              nutrition={nutrition}
            />
          ),
        )}
    </Flex>
  );
};

export default RecipeList;
