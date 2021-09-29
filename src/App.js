import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import React from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('color-note-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('color-note-app-data', JSON.stringify(notes));
  }, [notes]);

  const formatDate = (date, prefix = "") => {
    return typeof date == "object" ? prefix + date.toLocaleDateString() : "";
  }

  const getNewDate = () => formatDate(new Date());

  //To add a new note to the existing notes
  const addNote = (text) => {
    const date = getNewDate();
    const newNote = {
      id: nanoid(),
      text,
      date
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header
          darkMode={darkMode}
          handleDarkMode={setDarkMode} />
        <Search
          handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;