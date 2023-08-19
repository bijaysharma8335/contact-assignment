import React from "react";

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
const DisplayContact = () => {
    return (
        <div className="flex ">
            {contacts.map((contact, index) => (
                <div key={index} className="me-2 w-1/2">
                    <div className="border-2 border-black p-2 ">
                        <span className="font-semibold">{contact.fname}</span>
                        <span className="ml-2 font-semibold">{contact.lname}</span>
                        <span className="block">{contact.status}</span>
                    </div>
                    <button className="btn bg-lime-400 rounded text-white px-2 py-1 font-semibold my-4 w-20 block border-2 border-gray-400 font-sans mx-auto">
                        Edit
                    </button>
                    <button className="btn bg-red-400 rounded text-white px-2 py-1 font-semibold my-4 w-20 block border-2 border-gray-400 font-sans mx-auto">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DisplayContact;
