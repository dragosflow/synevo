import React from "react";
import ScrollableContainer from "./ScrollableContainer";
import { AppointmentCard } from "./AppointmentCard";

export const AppointmentList = () => {
  const appointments = [
    {
      location: "Centrul de recoltare rozovici",
      date: "23.03.2022",
      time: "14:00",
      type: "Teste uzuale",
    },
    {
      location: "Centrul de recoltare rozovici",
      date: "23.03.2022",
      time: "14:00",
      type: "Teste uzuale",
    },
  ];
  return (
    <ScrollableContainer>
      {appointments.map((appointment, index) => (
        <AppointmentCard
          key={index}
          {...appointment}
          className={index !== 0 ? "ml-3 inline-block" : "inline-block"}
        />
      ))}
    </ScrollableContainer>
  );
};
