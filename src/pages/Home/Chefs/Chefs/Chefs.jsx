import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(chefs);
  return (
    <div className="p-4 md:p-8 md:mx-32">
      <h1 className="text-center mb-20 text-red-400 font-bold text-4xl">
        Meet Our Chefs
      </h1>
      <div className="grid md:grid-cols-3 gap-10 md:w-3/4 md:mx-auto">
        {chefs &&
          chefs.map((chef) => (
            <div key={chef.id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <LazyLoadImage
                    src={chef.chefPicture}
                    className="w-full h-64 object-cover"
                    alt="Chefs"
                    effect="blur"
                    delayTime={300}
                    delayMethod="throttle"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mb-3">{chef.chefName}</h2>
                  <p>Experiences: {chef.yearsOfExperience} years</p>
                  <p className="flex gap-5">
                    <span>Recipes: {chef.numRecipes}</span>
                    <span>👍{chef.likes}</span>
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-red-400 border-none mt-3">
                      View Recipes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Chefs;
