import React from "react";
import char from "../../assets/images/chair.png";

const Banar = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <img src={char} className=" md:max-w-2xl rounded-lg shadow-2xl" />
        <div className="md:px-2 px-4">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary uppercase text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banar;
