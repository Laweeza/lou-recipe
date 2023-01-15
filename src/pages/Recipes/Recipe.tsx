import { useParams } from 'react-router-dom';
import RecipeItem from '../../components/Recipe/RecipeItem';
import recipesList from '../../__fixtures__';

export const Recipe = () => {
  const { id } = useParams();
  const recipe = recipesList.find(({ id: recipeId }) => Number(id) === recipeId);
  return <div>Recipe {id}</div>;
};
