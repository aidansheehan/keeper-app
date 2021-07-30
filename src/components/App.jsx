import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes.js";

function App() {
    return(
        <div>
            <Header />
            <CreateArea />
            {notes.map(noteItem => (
                <Note
                    key={noteItem.title}
                    title={noteItem.title}
                    content={noteItem.content}
                />
                ))}
            <Footer />
        </div>
    );
}

export default App;
