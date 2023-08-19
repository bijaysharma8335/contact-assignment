import React from "react";

const contacts = [
    {
        index: 1,
        fname: "John",
        lname: "Doe",
        status: "Active"
    },
    {
        index: 2,
        fname: "Alisha",
        lname: "Shrestha",
        status: "Active"
    },

]
const DisplayContact = () => {
    return <div>
        {
            contacts.map((contact, index) => (
                <div>
                    <div>
                        <span>{contact.fname}</span>
                        <span>{contact.lname}</span>
                        <span>{contact.status}</span>
                    </div>
                    <button></button>
                    <button></button>

                </div>

            ))
        }
    </div>
};

export default DisplayContact;
