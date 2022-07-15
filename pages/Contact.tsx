import React from "react";
import { Main } from "../components/Main";

const Contact = () => {
  return (
    <div className="bg-white text-black m-auto">
      <Main headerTitle="Contact" message="Submit the form below" />
      <div className="max-w-[1240px] m-auto p-4 ">
        <h1 className="text-center font-bold p-4">Left's work together</h1>
        <form className="max-w-[600] m-auto">
          <div className="grid grid-cols-2">
            <input
              className="border shadow-lg p-3"
              type={"text"}
              placeholder="Name"
            />
            <input
              className="border shadow-lg p-3 ml-2"
              type={"email"}
              placeholder="Email"
            />
          </div>
          <input
            className="border shadow-lg p-3 w-full my-2"
            type={"text"}
            placeholder="Subject"
          />
          <textarea
            className="border shadow-lg p-3 w-full"
            cols={30}
            rows={4}
            placeholder="Message"
          ></textarea>
          <button className="border shadow-lg p-3 w-full mt-2 bg-gray-300 rounded-md text-black">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
