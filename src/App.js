import React from "react";

// Adding components
import Player from "./components/Player";
import Song from "./components/Song";

// Import styles
import "./styles/app.scss";

// Import music data
import data from "./data";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
