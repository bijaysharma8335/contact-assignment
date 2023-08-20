import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";

//configure redux store with configureStore function
const store = configureStore({
    reducer: {
        contacts: contactReducer, //using contactReducer for managing contacts slice from store
    },
});

// Defining the RootState type based on the state of the store
export type RootState = ReturnType<typeof store.getState>;

// Defining the AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;

//exporting the configured redux store for using in the application
export default store;
