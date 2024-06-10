import React from "react";
import { Header } from "./components/Header";
import { OptionsCard } from "./components/OptionsCard";
import optionsMedicalIcon from "./assets/svgs/options-medical-icon.svg";
import ScrollableContainer from "./components/ScrollableContainer";
function App() {
  return (
    <div className='w-full h-screen bg-synevo-gray'>
      <Header />
    </div>
  );
}

export default App;
