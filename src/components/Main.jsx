import React from "react";
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientList } from "./IngredientList";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  const list = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  const [recipeShown, setRecipeShown] = React.useState(false);

  function onGetRecipe() {
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient">
        <input
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add Ingredient</button>
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

      {recipeShown ? <ClaudeRecipe /> : null}
    </main>
  );
}
