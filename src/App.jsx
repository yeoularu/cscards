import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
  const [id, setId] = useLocalStorage("currentId", 0);

  return (
    <div className="bg-neutral-900">
      <Header />
      <div className="w-full h-screen flex flex-col justify-evenly items-center">
        <button
          className="bg-neutral-800 w-80 h-1/5"
          onClick={() => (id === 0 ? null : setId(id - 1))}
        ></button>
        <Card id={id} />
        <button
          className="bg-neutral-800 w-80 h-1/5"
          onClick={() => (id === data.length - 1 ? null : setId(id + 1))}
        ></button>
      </div>
    </div>
  );
}

export default App;
