import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const chef = useLoaderData();
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numRecipes,
    likes,
    bio,
  } = chef;

  return (
    <div className="p-4 md:p-8 md:mx-32 text-center">
      <img
        src={chefPicture}
        alt="chef's Picture"
        className="w-full md:w-[900px] h-96 md:h-[700px] object-cover mx-auto"
      />
      <div className="my-14">
        <h1 className="text-3xl font-bold mb-3">
          Meet <span className="text-center text-red-400">{chefName}</span>
        </h1>
        <p className="text-lg w-full md:w-3/5 md:mx-auto">{bio}</p>
        <div className="flex justify-center gap-20 mt-4">
          <p className="text-lg">
            Experiences:{" "}
            <span className="text-red-400 font-bold">
              {yearsOfExperience} years
            </span>
          </p>
          <p className="text-lg">
            Recipes:{" "}
            <span className="text-red-400 font-bold">{numRecipes}</span>
          </p>
          <p className="text-lg">
            Likes: <span className="text-red-400 font-bold">{likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
