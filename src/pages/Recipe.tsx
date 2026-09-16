import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/recipes.json';

function Recipe() {
  const { id } = useParams<{ id: string }>();

  const recipe = recipesData.recipes.filter((r) => r.id === Number(id))[0];

  return (
    <div>
    <Link to="/">Retour</Link>
         {recipe ? (
        <div>
          <h1>{recipe.name}</h1>
            <img src={recipe.image} width={320} />
          <p>Préparation : {recipe.prepTimeMinutes} min</p>
            <p>Cuisson : {recipe.cookTimeMinutes} min</p>
          <h2>Les Ingrédients</h2>
          {recipe.ingredients.map((ing, index) =>
            <p key={index}>{ing}</p>
          )}
          <h2>Étapes</h2>
          {recipe.instructions.map((step, index) =>
            <p key={index}>{step}</p>
          )
        }
        </div>
      ) : 
      (
        <p>La Recette est introuvable.</p>
      )
    }
    </div>
  );
}
export default Recipe;