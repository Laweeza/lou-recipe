import { createBrowserRouter } from 'react-router-dom';

import RecipeList from '../components/Recipe/RecipeList';
import Desserts from '../pages/Desserts';
import Entrees from '../pages/Entrees';
import ErrorPage from '../pages/ErrorPage';
import Sides from '../pages/Sides';
import Snacks from '../pages/Snacks';
import CategoryNav from '../components/Nav';
import recipesList from '../__fixtures__';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CategoryNav />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RecipeList recipes={recipesList.recipes} />,
      },
      {
        path: '/entrees',
        element: <Entrees />,
      },
      {
        path: '/sides',
        element: <Sides />,
      },
      {
        path: '/desserts',
        element: <Desserts />,
      },
      {
        path: '/snacks',
        element: <Snacks />,
      },
    ],
  },
]);

export default router;
