import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Google Notes Clone</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;