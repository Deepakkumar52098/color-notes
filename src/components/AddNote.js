import { useEffect, useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [newNote, setNewNote] = useState('');
    const maxCharCount = 200;
    const [charCount, setCharCount] = useState(maxCharCount);
    useEffect(() => {
        setCharCount(maxCharCount - newNote.length);
    }, [newNote]);

    //To update the character count on typing any text 
    const handleOnChange = (event) => {
        const value = event.target.value;
        if (maxCharCount - value.length >= 0) {
            setNewNote(value);
        }
    }

    //To handle onClick event on clicking save button
    const handleSaveClick = () => {
        if (newNote.trim().length > 0) {
            newNote && handleAddNote(newNote);
            setNewNote('');
        }
    }

    return (
        <div className="note addNote">
            <textarea
                className="add-textArea"
                row="20"
                cols="10"
                placeholder="Add your notes here..."
                value={newNote}
                onChange={handleOnChange}>
            </textarea>
            <div className="note-footer">
                <small>Character Count: {charCount}</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    );
}

//To render the add feature
export default AddNote;