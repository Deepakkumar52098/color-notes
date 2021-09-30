import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const EditNote = ({ editText, handleAddNote, handleEditMode }) => {

    const [newNote, setNewNote] = useState(editText);
    const maxCharCount = 200;
    const [charCount, setCharCount] = useState();
    useEffect(() => {
        setCharCount(maxCharCount - newNote.length)
    }, [newNote]);

    const handleEditText = (event) => {
        const value = event.target.value;
        if (maxCharCount - value.length >= 0) {
            setNewNote(value);
        }
    }

    const updateHandler = () => {
        if (newNote.trim().length > 0) {
            handleAddNote(newNote);
            handleEditMode((previousValue) => !previousValue);
        }
    }

    const handleClose = () => {
        handleEditMode(false);
    }

    return (
        <div className="editNote">
            <div className="edit-header">
                <span>Edit Enabled!</span>
                <MdClose
                    className="close-icon"
                    size="1.3em"
                    onClick={handleClose} />
            </div>
            <textarea
                className="edit-textArea"
                placeholder="Update or close notes on top right..."
                value={newNote}
                onChange={handleEditText}>
            </textarea>
            <div className="edit-footer">
                <small>Character Count: {charCount} </small>
                <button
                    className="update"
                    onClick={updateHandler}>Update</button>
            </div>

        </div>
    );
};

export default EditNote;