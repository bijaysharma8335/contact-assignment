import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../features/contactSlice";

// Define the Contact interface with properties of a contact
interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    status: string;
}

// Define the props interface for the EditContact component
interface EditContactProps {
    contact: Contact;
    onContactUpdate: () => void;
}

// EditContact component that allows editing a contact's details
const EditContact: FC<EditContactProps> = ({ contact, onContactUpdate }) => {
    const dispatch = useDispatch();

    // State to manage edit contact data
    const [editedContact, setEditedContact] = useState<Contact>({
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        status: contact.status,
    });

    // Event handler for changing first name
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedContact({ ...editedContact, firstName: e.target.value });
    };

    // Event handler for changing last name
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedContact({ ...editedContact, lastName: e.target.value });
    };

    // Event handler for changing status
    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedContact({ ...editedContact, status: e.target.value });
    };

    // Event handler for update  contact
    const handleSaveEditedContact = () => {
        // Dispatch an action to update the contact
        dispatch(updateContact(editedContact));
        onContactUpdate();
    };

    // Render the EditContact component
    return (
        <div className="p-2">
            <h5 className="text-center my-3 text-black font-semibold font-serif">
                Edit Contact Screen
            </h5>

            <div className="border-2 border-black p-2 bg-white">
                <form className="w-full">
                    <div className="mb-4 sm:flex sm:items-center md:flex md:items-start lg:flex lg:items-center xl:flex xl:items-center">
                        <label htmlFor="fname" className="mr-2 font-semibold sm:w-1/4">
                            First Name:
                        </label>
                        <input
                            type="text"
                            className="border border-black py-1 px-2 sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/4 w-full"
                            value={editedContact.firstName}
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
                            className="border border-black py-1 px-2 sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/4 w-full"
                            value={editedContact.lastName}
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
                                    checked={editedContact.status === "Active"}
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
                                    checked={editedContact.status === "Inactive"}
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
                    onClick={handleSaveEditedContact}
                    className="btn bg-gray-200 border-gray-600 border-2  text-black text-sm font-bold my-2 p-2 font-serif"
                >
                    Save Editted Contact
                </button>
            </div>
        </div>
    );
};

export default EditContact;
