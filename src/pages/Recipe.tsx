import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/recipes.json';

interface Recipe{
  id:number;
  name:string;
   prepTimeMinutes:number;
  cookTimeMinutes:number;
image:string;
  ingredients:string[]
    instructions:string [];
}

function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const recipes: Recipe[] = recipesData.recipes;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <p>Recette introuvable.</p>;
  }
  return (
    <section className="recipe-detail">
      <Link to="/">← Retour</Link>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-detail-image" />
      <p>Préparation : {recipe.prepTimeMinutes} min , Cuisson : {recipe.cookTimeMinutes} Minutes</p>

      <h2>Les Ingrédients</h2>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        )
     )
    }
      </ul>
      <h2>Étapes</h2>
      <ol>
        {recipe.instructions.map((step, index)=>(
          <li key={index}> {step} </li>
        )
)        }
</ol>
    </section>
  );
}

export default RecipeDetail;