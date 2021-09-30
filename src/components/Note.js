import { MdDeleteForever, MdEdit } from 'react-icons/md'

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <div>
                    <MdEdit
                        className="delete-icon"
                        size="1.3em"
                        onClick={() => handleEditNote(id)}
                    />
                    <MdDeleteForever
                        className="delete-icon"
                        size="1.3em"
                        onClick={() => handleDeleteNote(id)} />
                </div>
            </div>
        </div>
    )
}

//To render the existing notes
export default Note;