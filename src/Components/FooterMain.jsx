import React from "react";

const FooterMain = () => {
  return (
    <>
      <footer className="bg-[#125774] py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full xl:w-1/5 mb-4">
              <a href="/" className="block w-56 mb-4">
                <h1 className="text-2xl font-bold">HealthBooker</h1>
              </a>
              <p>
                Tailwindow is a collection of UI Components created using
                Tailwind CSS. The components provide building blocks to design
                without overriding styles.
              </p>
            </div>
            <div className="w-full sm:w-auto mb-4">
              <h2 className="text-2xl pb-2 mb-2 border-b-4">Company</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto xl:w-1/5">
              <h2 className="text-2xl pb-2 mb-2 border-b-4">Connect With Us</h2>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="h-8 w-8 border border-white rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400"
                ></a>
                <a
                  href="#"
                  className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;
