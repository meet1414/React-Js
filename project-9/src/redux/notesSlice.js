import { createSlice } from '@reduxjs/toolkit';

const getNotesFromLocalStorage = () => {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
};

const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: getNotesFromLocalStorage(),
  reducers: {
    addNote: (state, action) => {
      const newState = [...state, action.payload];
      saveNotesToLocalStorage(newState);
      return newState;
    },
    deleteNote: (state, action) => {
      const newState = state.filter((note) => note.id !== action.payload);
      saveNotesToLocalStorage(newState);
      return newState;
    },
    editNote: (state, action) => {
      const { id, title, content } = action.payload;
      const newState = state.map((note) =>
        note.id === id ? { ...note, title, content } : note
      );
      saveNotesToLocalStorage(newState);
      return newState;
    },
    sortNotes: (state) => {
      return [...state].sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    searchNotes: (state, action) => {
      const query = action.payload.toLowerCase();
      return state.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.date.toLowerCase().includes(query)
      );
    },
  },
});

export const { addNote, deleteNote, editNote, sortNotes, searchNotes } = notesSlice.actions;
export default notesSlice.reducer;