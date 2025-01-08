import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote, sortNotes, searchNotes } from '../redux/notesSlice';
import NoteItem from './NoteItem';
import '../styles/NoteList.css';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchNotes(searchQuery));
  };

  return (
    <div className="note-list">
      <div className="note-list-controls">
        <button onClick={() => dispatch(sortNotes())}>Sort by Date</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={() => dispatch(deleteNote(note.id))}
          onEdit={(updatedNote) => dispatch(editNote(updatedNote))}
        />
      ))}
    </div>
  );
};

export default NoteList;