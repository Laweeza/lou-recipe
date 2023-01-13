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
      description: 'A simple sweet treat!',
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
      imageUrl: './pudding.png',
      nutrition: {
        serving: 524,
        calories: 380,
        fat: 0,
        protein: 48,
      },
    },
    {
      id: 2,
      title: 'Protein Naan',
      category: {
        id: 1,
        name: 'Entree',
      },
      description: 'Have this as a side to your tandoori chicken.',
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
      imageUrl: './naan.png',
      nutrition: {
        serving: 1,
        calories: 190,
        fat: 0,
        protein: 10,
      },
    },
    {
      id: 3,
      title: 'Chicken',
      category: {
        id: 1,
        name: 'Dessert',
      },
      description: 'A simple sweet treat!',
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
      imageUrl: './chicken.png',
      nutrition: {
        serving: 524,
        calories: 380,
        fat: 0,
        protein: 48,
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
