import React from "react";
import ScrollableContainer from "./ScrollableContainer";
import { TestCard } from "./TestCard";

export const TestList = () => {
  const tests = [
    {
      title: "Urine test or longer test name",
      name: "Olivia Wilson",
    },
    {
      title: "Urine test or longer test name",
      name: "Olivia Wilson",
    },
  ];

  return (
    <ScrollableContainer>
      {tests.map((test, index) => (
        <TestCard
          key={index}
          title={test.title}
          name={test.name}
          className={index !== 0 ? "ml-3 inline-block" : "inline-block"}
        />
      ))}
    </ScrollableContainer>
  );
};
