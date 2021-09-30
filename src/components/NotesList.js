import AddNote from "./AddNote";
import EditNote from "./EditNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, editMode, handleEditMode, editText }) => {
    return (
        <div className="notes-list">
            {notes.map((note) =>
                <Note id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    // editMode={editMode}
                    handleEditNote={handleEditNote}
                />)}
            {editMode && <EditNote
                editText={editText}
                handleAddNote={handleAddNote}
                editMode={editMode}
                handleEditMode={handleEditMode} />}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;