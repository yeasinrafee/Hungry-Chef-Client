import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching Data from api of Chefs
  useEffect(() => {
    fetch("https://hungry-chef-server-yeasinrafee.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <div className="h-96 w-96 mx-auto my-60">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="p-4 md:p-8 md:mx-32">
      <hr />
      <h1 className="text-center mb-20 text-red-400 font-bold text-4xl mt-10">
        Meet Our Chefs
      </h1>
      {/* Chef Cards  */}
      <div className="grid md:grid-cols-3 gap-10 w-full md:w-3/4 md:mx-auto">
        {chefs &&
          chefs.map((chef) => (
            <div key={chef.id} className="mb-10 w-full">
              <div className="card w-full bg-base-100 shadow-xl">
                {/* LazyLoadingImage  */}
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
                    <Link to={`/chefs/${chef.id}`}>
                      <button className="btn bg-red-400 border-none mt-3">
                        View Recipes
                      </button>
                    </Link>
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
