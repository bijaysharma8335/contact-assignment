import { useState, FC } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import AddContact from "./Contact/AddContact";
import EditContact from "./Contact/EditContact";
import { RootState } from "./features/store";
import { deleteContact } from "./features/contactSlice";

interface Contact {
    id: string;
    firstName: string;
    lastName: string; // Use 'string' instead of 'String'
    status: string;
}
const ContactPage: FC = () => {
    const dispatch = useDispatch();
    // Retrieve contacts data from Redux store using useSelector
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const [active, setActive] = useState("displaycontact");
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    // Handle click event to switch to the 'addcontact' mode
    const handleCreateContactClick = () => {
        setActive("addcontact");
    };
    // Handle click event to switch to the 'editcontact' mode
    const handleEditContactClick = (contact: Contact) => {
        setActive("editcontact");
        setSelectedContact(contact);
    };

    // Handle click event to delete a contact
    const handleDeleteContactClick = (contactId: string) => {
        // Dispatch deleteContact action with the contact's id
        dispatch(deleteContact(contactId));
    };
    return (
        <div className="bg-orange-50  py-3 px-5  w-full  ">
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
                                    <button>View</button>
                                    <span className="font-semibold">{contact.firstName}</span>
                                    <span className="ml-1 font-semibold  overflow-hidden overflow-ellipsis">
                                        {contact.lastName}
                                    </span>
                                    <span className="block">{contact.status}</span>
                                </div>
                                <button
                                    onClick={() => handleEditContactClick(contact)}
                                    className="btn bg-lime-400 rounded text-white px-2 py-1 font-semibold my-4 w-20 block border-2 border-gray-400 font-sans mx-auto"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteContactClick(contact.id)}
                                    className="btn bg-red-400 rounded text-white px-2 py-1 font-semibold my-4 w-20 block border-2 border-gray-400 font-sans mx-auto"
                                >
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
            {/* Render the 'AddContact' component in 'addcontact' mode */}
            {active === "addcontact" && (
                <AddContact onContactSave={() => setActive("displaycontact")} />
            )}
            {/* Render the 'EditContact' component in 'editcontact' mode */}
            {active === "editcontact" && selectedContact !== null && (
                <EditContact contact={selectedContact} />
            )}
        </div>
    );
};

export default ContactPage;
