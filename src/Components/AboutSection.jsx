import React from "react";
import Pic from "./../Img/doctor-holding-hands-with-patient.jpg";
const AboutSection = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-[#125774] text-center">
          About Us
        </h1>

        <div className="flex items-center justify-between mt-20">
          <div className="img">
            <img src={Pic} alt="" width={600} height={600} />
          </div>
          <div className="heading w-1/2">
            <h1 className="text-3xl font-bold mb-7">
              Simplifying <span className="text-[#125774]">Healthcare </span>
              One <span className="text-[#125774]">Booking </span>at a Time
            </h1>
            <p className="mb-7 text-xl">
              At HealthBooker, we are dedicated to transforming the way people
              access and manage healthcare. Our platform connects patients with
              trusted healthcare providers, making it easier to book
              appointments, access medical services, and receive expert care—all
              in one place.We strive to simplify healthcare by offering a
              seamless, efficient, and user-friendly booking experience. Our
              goal is to bridge the gap between patients and healthcare
              professionals, ensuring everyone receives timely and quality
              medical attention.
            </p>
            <button
              type="button"
              class="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium text-lg rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
