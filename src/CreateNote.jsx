import React, { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import Button from '@mui/material/Button';
import { MdNotificationImportant } from "react-icons/md";


const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (e) => {
    //const value=e.target.value;
    //const name=e.target.name;

    const { name, value } = e.target;    //object destructring

    setNote((prevData) => {
      return {
        ...prevData,                      //spread operator (...obj_name->behave as array)
        [name]: value,
      };
    });
  }

  const AddEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: '',
    });
  }

  const expandIt = () => {
    setExpand(true);
  }
  const shrink = () => {
    setExpand(false);
  }

  return (
    <>
      <div className="main_note">
      <p><MdNotificationImportant /> For downloading: Create and Download one Note at a time</p>
        <form>
          {expand ?
            (<input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title" />) : null}
          <textarea
            rows=''
            column=''
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write your note..."
            onClick={expandIt}
            onDoubleClick={shrink} />

          {expand ?
            (<Button onClick={AddEvent}>
              <AiFillPlusSquare className="plus_sign" />
            </Button>) : null}
        </form>
      </div>

    </>
  )
}



export default CreateNote;