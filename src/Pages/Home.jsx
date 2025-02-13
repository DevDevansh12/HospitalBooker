import React from "react";
import Img from "./../Img/pic.png";
const Home = () => {
  return (
    <>
      <div className="container mx-auto p-5">
        <div className="navbar flex items-center justify-between">
          <div className="heading w-1/2">
            <h1 className="text-6xl font-bold mb-7">
              Smart <span className="text-[#125774]">Healthcare </span>Starts
              with Easy <span className="text-[#125774]">Booking!</span>
            </h1>
            <p className="mb-7">
              Say goodbye to long wait times and complicated appointment
              processes. With HealthBooker, finding and booking the right
              healthcare professional is just a few clicks away. Whether it's a
              routine check-up or a specialist consultation, we make healthcare
              accessible, efficient, and stress-free. Take control of your
              well-being—schedule your appointments effortlessly today!
            </p>
            <button
              type="button"
              class="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium text-lg rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Join Now
            </button>
          </div>
          <div className="img">
            <img src={Img} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// https://preview.themeforest.net/item/docfind-medical-online-booking-react-js-template/full_screen_preview/33404527?_ga=2.251234117.292731240.1739445806-14956747.1694597442
