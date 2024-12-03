export function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  function onsubmitted(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    ingredients.push(newIngredient);

    alert(ingredients);
  }

  const list = ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));

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
