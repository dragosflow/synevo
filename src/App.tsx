import React from "react";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { UserCard } from "./components/UserCard";

function App() {
  return (
    <div className='w-full h-screen bg-synevo-gray'>
      <Header />
      <Options />
      <UserCard />
    </div>
  );
}

export default App;
