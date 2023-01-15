import { createBrowserRouter } from 'react-router-dom';

import RecipeList from '../components/Recipe/RecipeList';
import ErrorPage from '../pages/ErrorPage';
import { Recipe } from '../pages/Recipes/Recipe';
import recipesList from '../__fixtures__';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <RecipeList recipes={recipesList.recipes} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RecipeList recipes={recipesList} />,
      },
      {
        path: '/recipes/:id',
        element: <Recipe />,
      },
    ],
  },
]);

export default router;
