import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const selectContacts = (state) => state.contacts.contacts;
const selectLoading = (state) => state.contacts.loading;
const selectError = (state) => state.contacts.error;

export const selectVisibleContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const useContact = () => useSelector(selectContacts);
export const useLoading = () => useSelector(selectLoading);
export const useError = () => useSelector(selectError);

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const contactSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id != action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;
