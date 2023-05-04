import React from "react";

const Recipes = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="p-4 md:p-8 md:mx-32 md:my-10">
      <h1 className="text-center text-3xl text-red-400 mb-4">
        Top 3 Recipes:{" "}
      </h1>
      <div className="md:flex justify-around md:mb-5">
        {recipes.map((recipe) => (
          <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title text-2xl">{recipe.recipeName}</h2>
              <div className="">
                <div>
                  <h3 className="text-lg text-red-400">
                    List of ingredients:{" "}
                  </h3>
                  <ul className="pl-3">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li>
                        {i + 1}. {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="my-5">
                  <h3 className="font-bold text-red-400">Cooking Method: </h3>
                  <ul className="pl-2">
                    {recipe.cookingMethod.map((step, i) => (
                      <li>
                        {i + 1}. {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn bg-red-400 border-none">
                  Add to Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
<h1>Recipes</h1>;
