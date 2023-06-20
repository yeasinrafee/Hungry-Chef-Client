import React from "react";

const Pricing = () => {
  return (
    <>
      <hr />
      <h2 className="text-center text-red-400 font-bold text-4xl mt-36">
        Get A Good Deal
      </h2>

      {/* Pricing Cards  */}
      <div className="md:flex w-full md:w-3/4 md:mx-auto items-center justify-between mt-5 md:mt-20 mb-40 px-5 md:px-0">
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mb-5 md:mb-0">
          <div className="card-body items-center text-center">
            <p className="bg-red-400 px-7 py-1 rounded-2xl text-white">
              Regular
            </p>
            <h2 className="card-title font-bold text-5xl text-red-400 my-4">
              $29.99
            </h2>
            <p>Get Our Regular price: </p>
            <div className="text-left">
              <ul>
                <li>✅ Free Delivery</li>
                <li>✅ Access All Recipes</li>
                <li>✅ Download Recipes</li>
                <li>❌ Contact with Chef</li>
                <li>❌ 24 Hour Services</li>
              </ul>
            </div>
            <div className="card-actions">
              <button className="btn bg-red-400 border-none mt-4 hover:bg-red-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl mb-5 md:mb-5">
          <div className="card-body items-center text-center">
            <p className="bg-red-500 px-7 py-1 rounded-2xl text-white">
              Standard
            </p>
            <h2 className="card-title font-bold text-5xl text-red-400 my-4">
              $49.99
            </h2>
            <p>Get Our Regular price: </p>
            <div className="text-left">
              <ul>
                <li>✅ Free Delivery</li>
                <li>✅ Access All Recipes</li>
                <li>✅ Download Recipes</li>
                <li>✅ Contact with Chef</li>
                <li>❌ 24 Hour Services</li>
              </ul>
            </div>
            <div className="card-actions">
              <button className="btn bg-red-400 border-none mt-4 hover:bg-red-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <p className="bg-red-400 px-7 py-1 rounded-2xl text-white">
              Regular
            </p>
            <h2 className="card-title font-bold text-5xl text-red-400 my-4">
              $79.99
            </h2>
            <p>Get Our Regular price: </p>
            <div className="text-left">
              <ul>
                <li>✅ Free Delivery</li>
                <li>✅ Access All Recipes</li>
                <li>✅ Download Recipes</li>
                <li>✅ Contact with Chef</li>
                <li>✅ 24 Hour Services</li>
              </ul>
            </div>
            <div className="card-actions">
              <button className="btn bg-red-400 border-none mt-4 hover:bg-red-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Pricing;
