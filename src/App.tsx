import React from "react";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { UserCard } from "./components/UserCard";
import user from "./assets/svgs/persons/user.svg";
import { TestList } from "./components/TestList";
import { SectionTitle } from "./components/SectionTitle";
import { AppointmentList } from "./components/AppointmentList";
import { UsersList } from "./components/UsersList";

function App() {
  return (
    <div className='w-full h-full bg-synevo-gray'>
      <Header />
      <div className='max-w-4xl md:mx-auto'>
        <Options />
        <UserCard name='Elisabeta Aardeleanu' photoSrc={user} />
        <TestList />
        <SectionTitle
          title='Appointments'
          PlusButton={{ show: true }}
          ChevronRightButton={{ show: true }}
        />
        <AppointmentList />
        <div>
          <SectionTitle title='Family' ChevronRightButton={{ show: true }} />
          <UsersList />
        </div>
        <div>
          <SectionTitle title='Doctors' ChevronRightButton={{ show: true }} />
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default App;
