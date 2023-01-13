import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { RecipeListProps } from './components/Recipe/Recipe.types';
import { CategoryTabs } from './components/Categories/Tabs';
import RecipeList from './components/Recipe/RecipeList';
import Layout from './components/Layout';
import Root from './routes';
import ErrorPage from './pages/ErrorPage';

// allow adding of recipes with different units
// route to categories
// pictures? :/

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
        name: 'Side',
      },
      description: 'Have this as a side to your tandoori chicken.',
      directions: [
        'Add all your ingredients to a large bowl and mix it together until it forms a dough ball.',
        'Break the dough into 6 smaller pieces and lightly knead them in your hands to smooth out.',
        'Add to a floured surface and use your hands to flatten each naan out into an oval shape.',
        'You do not need to flatten these out too thin because we want them to have the thickness of a flatbread.',
        'Heat a grill pan (or regular pan) over medium heat until hot.',
        'Add your naan bread one at a time and let cook for 30-60 seconds per side. Exact time will vary based on how hot your pan is and how thick your naan bread is.',
        'Continue for all 6 naan. I recommend cooking one at a time, that way you can easily assess when they are done.',
      ],
      ingredients: [
        { quantity: '150 g', name: 'Self Rising Flour' },
        { quantity: '30 g', name: 'PEScience Select Multi-Purpose Protein' },
        {
          quantity: '180 g',
          name: 'Plain Nonfat Greek Yogurt',
        },
        {
          quantity: '1/4 tsp',
          name: 'Salt',
        },
        { quantity: '1/4 tsp', name: 'Garlic Powder' },
      ],
      imageUrl: './naan.png',
      nutrition: {
        serving: 500,
        calories: 120,
        fat: 0,
        carbs: 19,
        protein: 9,
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
        <CategoryTabs />
        <RecipeList recipes={recipesList.recipes} />
      </Layout>
    </ChakraProvider>
  );
};
