import { useEffect, useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [newNote, setNewNote] = useState('');
    const maxCharCount = 200;

    const handleOnChange = (event) => {
        const value = event.target.value;
        if (maxCharCount - value.length >= 0) {
            setNewNote(value);
        }
    }

    const handleSaveClick = () => {
        if (newNote.trim().length > 0) {
            newNote && handleAddNote(newNote);
            setNewNote('');
        }
    }

    return (
        <div className="note addNote">
            <textarea
                row="20"
                cols="10"
                placeholder="Add your notes here..."
                value={newNote}
                onChange={handleOnChange}>
            </textarea>
            <div className="note-footer">
                <small>Character Count: {maxCharCount - newNote.length}</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    );
}

export default AddNote;