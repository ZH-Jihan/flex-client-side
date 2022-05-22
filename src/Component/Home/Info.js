import React from "react";
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8">
      <div className="card lg:card-side bg-accent shadow-xl">
        <figure>
          <img
            src={clock}
            alt="Album"
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div className="card lg:card-side bg-neutral shadow-xl text-white">
        <figure>
          <img
            src={marker}
            alt="Album"
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div className="card lg:card-side bg-accent shadow-xl">
        <figure>
          <img
            src={phone}
            alt="Album"
            className="p-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
