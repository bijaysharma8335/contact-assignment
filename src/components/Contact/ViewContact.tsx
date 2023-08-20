import { FC } from "react";

interface Contact {
    id: string;
    firstName: string;
    lastName: string; 
    status: string;
}
interface ContactDetailsModalProps {
    contact: Contact;
    onClose: () => void;
}

const ContactDetailsModal: FC<ContactDetailsModalProps> = ({ contact, onClose }) => {
    return (
        <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5">
                <h3 className="font-bold my-2">Contact Details</h3>
                <div>
                    <p>
                        <strong>First Name:</strong> {contact.firstName}
                    </p>
                    <p>
                        <strong>Last Name:</strong> {contact.lastName}
                    </p>
                    <p>
                        <strong>Status:</strong> {contact.status}
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="btn bg-gray-200 border-gray-600 border-2 text-black text-sm font-bold my-2 p-2 font-serif"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactDetailsModal;
