import React from "react";
import { AiRecipe } from "./AiRecipe";
import { IngredientList } from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const inputRef=React.useRef(null);

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    inputRef.current.value=""
  }
  const list = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  const [recipe, setRecipe] = React.useState("");

  async function onGetRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient">
        <input
          ref={inputRef}
          id='input'
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button onClick='clearInput'>Add Ingredient</button>
      </form>

      {/* Hide the display till one ingredient is entered */}
      {ingredients.length > 0 ? (
        <IngredientList
          list={list}
          ingredients={ingredients}
          onGetRecipe={onGetRecipe}
        />
      ) : null}

      {/* Recipe */}

      {recipe ? <AiRecipe recipe={recipe} /> : null}
    </main>
  );
}
