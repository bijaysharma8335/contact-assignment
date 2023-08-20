import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

//component for creating and saving new contact
const AddContact: FC<{ onContactSave: () => void }> = ({ onContactSave }) => {
    const dispatch = useDispatch();
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
        const newContact = { id: String(Date.now()), firstName, lastName, status };

        //dispatch addcontact reducer function and update store
        dispatch(addContact(newContact));

        // Call the provided callback to switch back to 'displaycontact' mode
        onContactSave();
    };

    return (
        <div className="p-2 ">
            <h5 className="text-center my-3 text-black font-semibold font-serif">
                Create Contact Screen
            </h5>
            <div className="border-2 border-black p-2 bg-white">
                <form className="w-full">
                    <div className="mb-4 sm:flex sm:items-center md:flex md:items-start lg:flex lg:items-center xl:flex xl:items-center">
                        <label htmlFor="fname" className="mr-2 font-semibold sm:w-1/4">
                            First Name:
                        </label>
                        <input
                            type="text"
                            className="border border-black py-1 px-2 sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/4"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                        />
                    </div>

                    <div className="mb-4 sm:flex sm:items-center md:flex md:items-start lg:flex lg:items-center xl:flex xl:items-center">
                        <label htmlFor="lname" className="mr-2 font-semibold sm:w-1/4">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            className="border border-black py-1 px-2 sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/4"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                        />
                    </div>

                    <div className="flex mb-4">
                        <label className="mr-2 font-semibold me-8 mt-4  sm:ms-0">Status:</label>
                        <div>
                            <div className="flex items-center mb-2 ">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Active"
                                    className="mr-1 ml-10 sm:ml-2 w-4 h-4"
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
                                    className="mr-1 ml-10 sm:ml-2 w-4 h-4"
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
                    onClick={handleSaveContact}
                    className="btn bg-gray-200 border-gray-600 border-2  text-black text-sm font-bold my-2 p-2 font-serif"
                >
                    Save Contact
                </button>
            </div>
        </div>
    );
};

export default AddContact;
