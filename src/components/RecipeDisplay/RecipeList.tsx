import { Accordion } from '@chakra-ui/react';

import { RecipeListProps } from './Recipe.types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple w='100%'>
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
    </Accordion>
  );
};

export default RecipeList;
