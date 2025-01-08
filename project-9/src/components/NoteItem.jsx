import React, { useState } from 'react';
import '../styles/NoteItem.css';

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleEdit = () => {
    onEdit({ id: note.id, title, content });
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div>
          <input className='my-3'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea className='my-3'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className='my-2' onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <span>{note.date}</span>
        </div>
      )}
      <button className='mx-3 my-2' onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;
