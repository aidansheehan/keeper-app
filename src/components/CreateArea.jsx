import React, {useState} from "react";

function CreateArea(props) {
  // Create Complex State to Track New Note Input
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  // Function to Handle Change in New Note Input [easier way to do this with [note]]
  function handleChange(event) {
    const {name, value} = event.target;
    if (name === "title") {
      setNewNote((prevValue) => {return {title: value, content: prevValue.note} });
    } else if (name === "content") {
      setNewNote((prevValue) => {return {title: prevValue.title, content: value} });
    }
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(newNote);
    setNewNote( {title:"", content: ""} );
  }

  return (
    <div>
      <form className="create-note" >
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content}  />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
