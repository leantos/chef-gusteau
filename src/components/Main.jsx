import React from "react";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  
  const list = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

  function onsubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={onsubmitted} className="add-ingredient">
        <input
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{list}</ul>
    </main>
  );
}
