import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date, handleDeleteNote, editMode }) => {
    return (
        <div className={`${editMode ? "edit-note" : "note"}`}>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    className="delete-icon"
                    size="1.3em"
                    onClick={() => handleDeleteNote(id)} />
            </div>
        </div>
    )
}

//To render the existing notes
export default Note;