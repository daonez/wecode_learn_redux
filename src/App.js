import React from "react";
import SongList from "./SongList";
import AddButton from "./AddButton";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="header">쥬크박스</div>
      <div className="main">
        <SongList />
        <AddButton />
      </div>
    </div>
  );
};

export default App;
