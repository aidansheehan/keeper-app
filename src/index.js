import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Implement delete note functionality :)
  // 1. Add delete button to the notes
  // 2. You need a deleteNote() function in app that finds the note by id and
  //   deletes it. This should be different from Key but it can still be by title.
  //   You will need to access this by clicking on a button in Note.jsx.


  // Extra Ideas:
  //   1. Add MongoDB and Oauth so users can sign an and have a saved set of notes
  //   2. Find a way to host this online. It can be your first project people can
  //   actually access. (Then maybe finish the Weather App and do the same with that)
