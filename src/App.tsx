import { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { RecipeListProps } from './components/Recipe/Recipe.types';
import RecipeList from './components/Recipe/RecipeList';
import Layout from './components/Layout';

const recipesList: RecipeListProps = {
  recipes: [
    {
      id: 1,
      title: 'Protein Pudding',
      category: {
        id: 1,
        name: 'Dessert',
      },
      directions: [
        'Throw in wet ingredients, followed by dry ingredients into a blender. Blend! This can be consumed immediately. Keeps in the fridge for up to 3 days in a seal tight container.',
      ],
      ingredients: [
        { quantity: '1 1/2 cups', name: 'Fairlife Milk' },
        { quantity: '1/2 cup', name: 'Soymilk' },
        {
          quantity: '1 rounded scoop',
          name: 'PEScience Selection Protein - Gourmet Vanilla Whey+Casein Blend',
        },
        {
          quantity: '1 packet',
          name: 'Fat Free Pistachio Pudding - Can sub with vanilla, chocolate, etc',
        },
        { quantity: '1/2 - 1/3 tsp', name: 'Guar Gum' },
      ],
      imageUrl: '',
      nutrition: {
        serving: '524 g',
        calories: '380',
        protein: '48 g',
      },
    },
    {
      id: 2,
      title: 'Protein Pudding',
      category: {
        id: 1,
        name: 'Dessert',
      },
      directions: [
        'Throw in wet ingredients, followed by dry ingredients into a blender. Blend! This can be consumed immediately. Keeps in the fridge for up to 3 days in a seal tight container.',
      ],
      ingredients: [
        { quantity: '1 1/2 cups', name: 'Fairlife Milk' },
        { quantity: '1/2 cup', name: 'Soymilk' },
        {
          quantity: '1 rounded scoop',
          name: 'PEScience Selection Protein - Gourmet Vanilla Whey+Casein Blend',
        },
        {
          quantity: '1 packet',
          name: 'Fat Free Pistachio Pudding - Can sub with vanilla, chocolate, etc',
        },
        { quantity: '1/2 - 1/3 tsp', name: 'Guar Gum' },
      ],
      imageUrl: '',
      nutrition: {
        serving: '524 g',
        calories: '380',
        protein: '48 g',
      },
    },
    {
      id: 3,
      title: 'Protein Pudding',
      category: {
        id: 1,
        name: 'Dessert',
      },
      directions: [
        'Throw in wet ingredients, followed by dry ingredients into a blender. Blend! This can be consumed immediately. Keeps in the fridge for up to 3 days in a seal tight container.',
      ],
      ingredients: [
        { quantity: '1 1/2 cups', name: 'Fairlife Milk' },
        { quantity: '1/2 cup', name: 'Soymilk' },
        {
          quantity: '1 rounded scoop',
          name: 'PEScience Selection Protein - Gourmet Vanilla Whey+Casein Blend',
        },
        {
          quantity: '1 packet',
          name: 'Fat Free Pistachio Pudding - Can sub with vanilla, chocolate, etc',
        },
        { quantity: '1/2 - 1/3 tsp', name: 'Guar Gum' },
      ],
      imageUrl: '',
      nutrition: {
        serving: '524 g',
        calories: '380',
        protein: '48 g',
      },
    },
  ],
};

export const App = () => {
  const [recipes, setRecipes] = useState<RecipeListProps>(recipesList);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RecipeList recipes={recipesList.recipes} />
      </Layout>
    </ChakraProvider>
  );
};
