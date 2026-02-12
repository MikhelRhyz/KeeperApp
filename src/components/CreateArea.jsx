import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [titleStatus, setTitleStatus] = useState("none");
  const [buttonStatus, setButtonStatus] = useState("none");
  const [expanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setTitleStatus("none");
    setButtonStatus("none");
    setExpanded(false);
  }

  function handleClick(event) {
    event.target.rows = 3;
    setTitleStatus("block");
    setButtonStatus("block");
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{ display: titleStatus }}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="1"
          onClick={handleClick}
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote} style={{ display: buttonStatus }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
