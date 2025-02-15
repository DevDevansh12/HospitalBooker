import React from "react";
import Img from "./../Img/pic.png";
import AboutSection from "../Components/AboutSection";
import StatsCard from "../Components/StatsCard";
import Contact from "../Components/Contact";
import FooterMain from "../Components/FooterMain";

const Home = () => {
  return (
    <>
      <div className="container mx-auto py-16 px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="heading md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold mb-7">
              Smart <span className="text-[#125774]">Healthcare </span>Starts
              with Easy <span className="text-[#125774]">Booking!</span>
            </h1>
            <p className="mb-7 text-md md:text-xl">
              Say goodbye to long wait times and complicated appointment
              processes. With HealthBooker, finding and booking the right
              healthcare professional is just a few clicks away. Whether it's a
              routine check-up or a specialist consultation, we make healthcare
              accessible, efficient, and stress-free. Take control of your
              well-being—schedule your appointments effortlessly today!
            </p>
            <button
              type="button"
              className="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium text-lg rounded-lg px-5 py-2.5 focus:outline-none"
            >
              Join Now
            </button>
          </div>
          <div className="img w-full md:w-1/2 flex justify-center">
            <img
              src={Img}
              alt="Healthcare"
              className="w-full max-w-[400px] md:max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-32">
        <AboutSection />
      </div>
      <div className="mt-32 container mx-auto flex items-center justify-between">
        <StatsCard size={1000} person={"Satisfied Patients"} />
        <StatsCard size={800} person={"Verified Doctors"} />
        <StatsCard size={750} person={"Specialist Doctors"} />
      </div>
      <div className="mt-32">
        <Contact />
      </div>
      <div className="mt-32">
        <FooterMain />
      </div>
    </>
  );
};

export default Home;

// https://preview.themeforest.net/item/docfind-medical-online-booking-react-js-template/full_screen_preview/33404527?_ga=2.251234117.292731240.1739445806-14956747.1694597442
