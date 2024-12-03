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
        <>
          <div className="ingredient-display">
            <h1 className="ingredients-heading">Ingredients on hand :</h1>
            <ul className="list-ingredients">{list}</ul>
          </div>

          {/* Require atleast three ingredients */}
          {ingredients.length > 3 ? (
            <div className="get-recipe-container">
              <div>
                <h3 className="recipe-h3">Ready for a recipe?</h3>
                <p className="recipe-p">
                  Generate a recipe from your list of ingredients
                </p>
              </div>
              <button className="get-recipe" onClick={onGetRecipe}>
                Get a Recipe
              </button>
            </div>
          ) : null}
        </>
      ) : null}

      {/* Recipe */}

      {recipeShown ? (
        <section>
          <h2 className="recipe-h2">Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      ) : null}
    </main>
  );
}
