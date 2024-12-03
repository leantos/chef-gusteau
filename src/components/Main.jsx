import React from "react";

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
      <div className="ingredient-display">
        <h1 className="ingredients-heading">Ingredients on hand :</h1>
        <ul className="list-ingredients">{list}</ul>
      </div>
      <div className="get-recipe-container">
        <div>
          <h3 className="recipe-h3">Ready for a recipe?</h3>
          <p className="recipe-p">Generate a recipe from your list of ingredients</p>
        </div>
        <button className="get-recipe">Get a Recipe</button>
      </div>
    </main>
  );
}
