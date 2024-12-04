/* eslint-disable react/prop-types */
export function IngredientList(props) {
  return (
    <>
      <div className="ingredient-display">
        <h1 className="ingredients-heading">Ingredients on hand :</h1>
        <ul className="list-ingredients">{props.list}</ul>
      </div>

      {/* Require atleast three ingredients */}
      {props.ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3 className="recipe-h3">Ready for a recipe?</h3>
            <p className="recipe-p">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button className="get-recipe" onClick={props.onGetRecipe}>
            Get a Recipe
          </button>
        </div>
      ) : null}
    </>
  );
}
