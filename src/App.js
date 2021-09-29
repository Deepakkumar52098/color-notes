import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import React from 'react';

const App = () => {

  //To manage the state of the color notes app
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  //To set the state of notes from the localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('color-note-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //To update the localStorage whenever notes data gets updated
  useEffect(() => {
    localStorage.setItem('color-note-app-data', JSON.stringify(notes));
  }, [notes]);

  const formatDate = (date, prefix = "") => {
    return typeof date == "object" ? prefix + date.toLocaleDateString() : "";
  }

  const getNewDate = () => formatDate(new Date());

  //To handle add feature
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

  //To handle delete feature
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