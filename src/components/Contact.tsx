import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import AddContact from "./Contact/AddContact";
import EditContact from "./Contact/EditContact";
const contacts = [
    {
        index: 1,
        fname: "John",
        lname: "Doe",
        status: "Active",
    },
    {
        index: 2,
        fname: "Alisha",
        lname: "Shrestha",
        status: "Active",
    },
];
const Contact = () => {
    const [active, setActive] = useState("displaycontact");
    const handleCreateContactClick = () => {
        setActive("addcontact");
    };
    const handleEditContactClick = () => {
        setActive("editcontact");
    };

    return (
        <div className="bg-orange-50  py-3 px-5 ">
            {active === "displaycontact" && (
                <div className="text-center">
                    <button
                        className="btn bg-gray-200 border-gray-600 border-2  text-black text-xl font-bold my-5 p-2 font-serif"
                        onClick={handleCreateContactClick}
                    >
                        Create Contact
                    </button>
                </div>
            )}

            {active === "displaycontact" ? (
                contacts.length > 0 ? (
                    <div className="flex w-auto">
                        {contacts.map((contact, index) => (
                            <div key={index} className="me-1 w-1/2">
                                <div className="border-2 border-black p-1 overflow-hidden">
                                    <span className="font-semibold">{contact.fname}</span>
                                    <span className="ml-1 font-semibold  overflow-hidden overflow-ellipsis">
                                        {contact.lname}
                                    </span>
                                    <span className="block">{contact.status}</span>
                                </div>
                                <button
                                    className="btn bg-lime-400 rounded text-white px-2 py-1 font-semibold my-4 w-20 block border-2 border-gray-400 font-sans mx-auto"
                                    onClick={handleEditContactClick}
                                >
                                    Edit
                                </button>
                                <button className="btn bg-red-400 rounded text-white px-2 py-1 font-semibold my-4 w-20 block border-2 border-gray-400 font-sans mx-auto">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="border-2 border-black p-2 mt-8 flex justify-evenly md:justify-between mx-2 mb-10"
                        style={{ backgroundColor: "#E5E5E5" }}
                    >
                        <div className="mt-8">
                            {" "}
                            <RiCloseCircleFill size="3em" />
                        </div>

                        <div className=" px-2 my-6 ">
                            <p className="text-gray-900 lg:text-2xl  sm:text-sm font-semibold">
                                No Contact Found
                                <br />
                                Please add contact from
                                <br />
                                Create Contact Button
                            </p>
                        </div>
                    </div>
                )
            ) : null}
            {active === "addcontact" && <AddContact />}
            {active === "editcontact" && <EditContact />}
        </div>
    );
};

export default Contact;
