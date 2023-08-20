import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";

//component for creating and saving new contact
const AddContact: FC = () => {
    //usestates
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [status, setStatus] = useState("Inactive");

    //event handler for changing in first name input
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    //event handler for changing in last name input
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    //event handler for changing  status radio button
    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    };
    //event handler for for new contact to store
    const handleSaveContact = () => {
        const newContact = { firstName, lastName, status };
        console.log(newContact);
    };

    return (
        <div className="p-2">
            <h5 className="text-center my-3 text-black font-semibold font-serif">
                Create Contact Screen
            </h5>
            <div className="border-2 border-black p-2 bg-white">
                <form onSubmit={handleSaveContact}>
                    <div className="flex mb-4">
                        <label htmlFor="fname" className="mr-2 font-semibold">
                            First Name:
                        </label>
                        <input
                            type="text"
                            className="border border-black py-1 px-2"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label htmlFor="lname" className="mr-2 font-semibold">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            className="border border-black py-1 px-2"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label className="mr-2 font-semibold me-8 mt-4 ms-2">Status:</label>
                        <div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Active"
                                    className="mr-1 w-4 h-4"
                                    checked={status === "Active"}
                                    onChange={handleStatusChange}
                                    style={{ accentColor: "black" }}
                                />
                                <span className="text-black font-semibold">Active</span>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Inactive"
                                    id="specify-color"
                                    className="mr-1 w-4 h-4"
                                    checked={status === "Inactive"}
                                    onChange={handleStatusChange}
                                    style={{ accentColor: "black" }}
                                />
                                <span className="text-black font-semibold">Inactive</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="btn bg-gray-200 border-gray-600 border-2  text-black text-sm font-bold my-2 p-2 font-serif"
                >
                    Save Contact
                </button>
            </div>
        </div>
    );
};

export default AddContact;
