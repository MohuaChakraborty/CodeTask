import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

// selector
export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
        deleteContacts: contactAdaptor.removeOne,
        removeAllContacts: contactAdaptor.removeAll,
        updateContacts: contactAdaptor.updateOne,
    },
    extraReducers: {},
})

export const { addContact, addContacts, deleteContacts, removeAllContacts, updateContacts } = contactsSlice.actions;

export default contactsSlice.reducer;