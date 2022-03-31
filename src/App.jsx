import { useState } from "react";
import Card from "./Card.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <div className="bg-neutral-900">
      <Header />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Card />
      </div>
    </div>
  );
}

export default App;
