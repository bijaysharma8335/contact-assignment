import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

const Contact = () => {
  return (
    <div className="bg-orange-50 w-full py-3 px-5">
      <div className="text-center">
        <button className="btn bg-gray-200 border-gray-600 border-2  text-black text-xl font-bold my-5 p-3 font-serif">
          Create Contact
        </button>
      </div>
      <div
        className="border-2 border-black p-2 mt-8 flex justify-evenly md:justify-between"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        <div className="mt-8">
          {" "}
          <RiCloseCircleFill size="2em" />
        </div>
        <div className=" px-2 my-6">
          <p className="text-gray-900 lg:text-2xl  sm:text-sm font-semibold">
            No Contact Found
            <br />
            Please add contact from
            <br />
            Create Contact Button
          </p>
        </div>
      </div>
      <AddContact />
      <EditContact/>
    </div>
  );
};

export default Contact;
