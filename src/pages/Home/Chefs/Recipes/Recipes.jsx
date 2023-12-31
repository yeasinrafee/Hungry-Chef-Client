import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";

const Recipes = ({ recipes }) => {
  const handleFavorite = (e) => {
    // It'll Disable the button
    e.target.disabled = true;
    toast("Added to the favorites");
  };
  return (
    <div className="p-4 md:p-8 md:mx-32 md:my-10">
      <hr />
      <h1 className="text-center text-3xl text-red-400 mb-4 py-3 ">
        Top 3 Recipes:{" "}
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-7 md:gap-0 md:justify-around md:mb-5 mt-5">
        {/* Recipe Cards  */}
        {recipes.map((recipe, i) => (
          <div className="card w-full md:w-96 bg-base-100 shadow-xl" key={i}>
            <div className="card-body relative">
              <h2 className="card-title text-2xl">{recipe.recipeName}</h2>
              <div className="mb-7">
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
              <div className="card-actions justify-end absolute right-2 bottom-1 flex items-center md:gap-3 mb-5 md:pl-2 md:pr-3">
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
                  className="btn bg-red-400 border-none hover:bg-red-700"
                >
                  Add Favorite
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
