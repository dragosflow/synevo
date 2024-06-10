import React from "react";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { UserCard } from "./components/UserCard";
import { TestCard } from "./components/TestCard";
import user from "./assets/svgs/persons/user.svg";
import { TestList } from "./components/TestList";

function App() {
  return (
    <div className='w-full h-screen bg-synevo-gray'>
      <Header />
      <Options />
      <UserCard name='Elisabeta Aardeleanu' photoSrc={user} />
      <TestList />
    </div>
  );
}

export default App;
