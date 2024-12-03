import React from "react";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(event) {
    event.preventDefault()
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
      <ul className="list-ingredients">{list}</ul>
    </main>
  );
}
