import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-[#125774] text-center">
          Contact Us
        </h1>

        <div className="flex items-center justify-between mt-10">
          <div className="mx-auto w-full">
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                <form action="https://fabform.io/f/{form-id}" method="post">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#125774] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#125774] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Subject
                    </label>
                    <input
                      placeholder="Enter your subject"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#125774] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#125774] focus:shadow-md"
                      defaultValue={""}
                    />
                  </div>

                  <button className="hover:shadow-form rounded-md bg-[#125774] py-3 mb-2 px-8 mx-auto w-full text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
