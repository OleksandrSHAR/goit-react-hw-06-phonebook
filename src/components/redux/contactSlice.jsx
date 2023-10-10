import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contacts => contacts.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const contacts of state) {
        if (contacts.id === action.payload) {
          contacts.completed = !contacts.completed;
        }
      }
    },
  },
});
export const { addContact, deleteContact, toggleCompleted } =
  contactsSlice.actions;
export const { contactsReducer } = contactsSlice.reducer;
