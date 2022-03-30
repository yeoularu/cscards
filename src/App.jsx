import { useState } from 'react'
import logo from './logo.svg'

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-between align-top bg-red-200">
      <h1 className="basis-1/4 place-content-center font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
      <img className="basis-1/2 hover:animate-spin" src={logo} />
    </div>
  );
}

export default App
