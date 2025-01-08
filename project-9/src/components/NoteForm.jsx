import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';
import '../styles/NoteForm.css';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedDate = `${now.toDateString()} ${now.toLocaleTimeString()}`;
    dispatch(
      addNote({
        id: Date.now(),
        title,
        content,
        date: formattedDate,
      })
    );
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;