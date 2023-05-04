import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";

const Recipes = ({ recipes }) => {
  const [disabled, setDisabled] = useState(false);

  const handleFavorite = () => {
    setDisabled(true);
    toast("Added to the favorites");
  };
  return (
    <div className="p-4 md:p-8 md:mx-32 md:my-10">
      <h1 className="text-center text-3xl text-red-400 mb-4">
        Top 3 Recipes:{" "}
      </h1>
      <div className="md:flex justify-around md:mb-5">
        {recipes.map((recipe, i) => (
          <div className="card w-96 bg-base-100 shadow-xl " key={i}>
            <div className="card-body relative">
              <h2 className="card-title text-2xl">{recipe.recipeName}</h2>
              <div className="">
                <div>
                  <h3 className="text-lg text-red-400">
                    List of ingredients:{" "}
                  </h3>
                  <ul className="pl-3">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>
                        {i + 1}. {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="my-5">
                  <h3 className="font-bold text-red-400">Cooking Method: </h3>
                  <ul className="pl-2">
                    {recipe.cookingMethod.map((step, i) => (
                      <li key={i}>
                        {i + 1}. {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card-actions justify-end absolute right-2 bottom-1 flex items-center gap-3">
                <span>Ratings:</span>
                <div className="">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={Math.round(recipe?.rating)}
                    readOnly
                  />
                </div>
                <p>{recipe?.rating}</p>
                <button
                  onClick={handleFavorite}
                  disabled={disabled}
                  className="btn bg-red-400 border-none"
                >
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
