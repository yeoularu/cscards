import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
  return (
    <div className="bg-neutral-900">
      <Header />
      <div className="w-full h-auto flex flex-col justify-center items-center">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
