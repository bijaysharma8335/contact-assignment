import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining the structure of a Contact
interface Contact {
    id: string;
    firstName: string;
    lastName: String;
    status: string;
}

// Defining the structure of the ContactState
interface ContactState {
    contacts: Contact[];
}

//initial state of contact slice
const initialState: ContactState = {
    contacts: [],
};

// creating redux slice for managing contacts
const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        //reducer for adding new contact
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        //reducer for updating existing contact
        updateContact: (state, action: PayloadAction<Contact>) => {
            const { id } = action.payload;
            const existingContact = state.contacts.find((contact) => contact.id === id);
            if (existingContact) {
                //update the contact if it exist
                Object.assign(existingContact, action.payload);
            }
        }, //reducer for deleting existing contact by ID
        deleteContact: (state, action: PayloadAction<string>) => {
            //filtering the contacts by specific contact ID
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        },
    },
});

//extracting action creators from contactSlice
export const { addContact, updateContact, deleteContact } = contactSlice.actions;

//export the reducer function to be used in store
export default contactSlice.reducer;
