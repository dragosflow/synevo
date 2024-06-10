import React from "react";
import { OptionsCard } from "./OptionsCard";
import ScrollableContainer from "./ScrollableContainer";
import optionsMedicalIcon from "../assets/svgs/options-medical-icon.svg";
import optionsTestIcon from "../assets/svgs/options-test-icon.svg";
import optionsPatientIcon from "../assets/svgs/options-patients-icon.svg";

export const Options = () => {
  const options = [
    {
      title: "Medical",
      subtitle: "library",
      iconSrc: optionsMedicalIcon,
    },
    {
      title: "Test",
      subtitle: "results",
      iconSrc: optionsTestIcon,
      notificationsNumber: 4,
    },
    {
      title: "My",
      subtitle: "patients",
      iconSrc: optionsPatientIcon,
    },
  ];
  return (
    <ScrollableContainer>
      {options.map((option, index) => (
        <OptionsCard
          key={index}
          title={option.title}
          subtitle={option.subtitle}
          iconSrc={option.iconSrc}
          notificationsNumber={option.notificationsNumber}
          className={index !== 0 ? "ml-2" : ""}
        />
      ))}
    </ScrollableContainer>
  );
};
