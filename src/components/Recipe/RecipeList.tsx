import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import Layout from '../Layout';
import { AddRecipe } from './AddRecipe';

import { RecipeProps } from './Recipe.types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }: { recipes: RecipeProps[] }) => {
  return (
    <Flex flexDir={'column'} px={8} gap={3}>
      <AddRecipe />
      <Flex gap={8} flexWrap={'wrap'}>
        {recipes?.length &&
          recipes.map(
            ({
              id,
              title,
              category,
              ingredients,
              description,
              directions,
              nutrition,
              imageUrl,
            }) => (
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
    </Flex>
  );
};

const RecipesPage = ({ recipes }: { recipes: RecipeProps[] }) => {
  return (
    <Layout>
      <RecipeList recipes={recipes} />
    </Layout>
  );
};

export default RecipesPage;
