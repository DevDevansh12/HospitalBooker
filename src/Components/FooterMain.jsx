import React from "react";

const FooterMain = () => {
  return (
    <>
      <footer className="bg-[#071820] py-4 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full xl:w-1/5 mb-4">
              <a href="/" className="block w-56 mb-4">
                <h1 className="text-2xl font-bold text-[#125774]">
                  HealthBooker
                </h1>
              </a>
              <p>
                Tailwindow is a collection of UI Components created using
                Tailwind CSS. The components provide building blocks to design
                without overriding styles.
              </p>
            </div>
            <div className="w-full sm:w-auto mb-4">
              <h2 className="text-2xl pb-2 mb-2 border-b-4 border-blue-600">
                Company
              </h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-auto xl:w-1/5">
              <h2 className="text-2xl pb-2 mb-2 border-b-4 border-blue-600">
                Connect With Us
              </h2>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13..." />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 border border-gray-100 rounded-full flex items-center justify-center hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097..." />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;
