import { Link } from 'react-router-dom';
import './App.css'
import recipesData from './data/recipes.json';

function App() {
  const Recipes = recipesData.recipes;

  return (
    <>
      <h1>Trabelsi Khalil</h1>

      {Recipes.map((recipe) =>
        <div key={recipe.id}>
          <img src={recipe.image} width={90} />
          <p><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></p>
          <p>Préparation : {recipe.prepTimeMinutes} min</p>
        </div>
      )
    }
   </>
  )
}
export default App