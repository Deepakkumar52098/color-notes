import { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import React from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'My first Note!',
      date: '29/09/2021'
    },
    {
      id: nanoid(),
      text: 'My second Note!',
      date: '30/09/2021'
    },
    {
      id: nanoid(),
      text: 'My third Note!',
      date: '01/10/2021'
    },
    {
      id: nanoid(),
      text: 'My fourth Note!',
      date: '02/10/2021'
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const formatDate = (date, prefix = "") => {
    return typeof date == "object" ? prefix + date.toLocaleDateString() : "";
  }

  const getNewDate = () => formatDate(new Date());

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