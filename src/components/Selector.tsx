"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProjectContainer, DesignContainer, UIUXContainer } from "./Exports";

export default function Selector() {
  const Dot = <Image src="/ellipse.svg" width={6} height={6} alt="Ellipse" />;

  const [selectedOption, setSelectedOption] = useState("coding");

  const options = [
    { name: "Coding Projects", id: "coding", icon: Dot },
    { name: "UI/UX", id: "ui", icon: Dot },
    { name: "Design Pieces", id: "design", icon: Dot },
  ];

  return (
    <div className="full-width">
      <div className="selector-container">
        {options.map((option) => (
          <div className="selector-icon">
            {selectedOption === option.id && (
              <div key={option.name}>{option.icon}</div>
            )}
          </div>
        ))}

        {options.map((option) => (
          <div className="selector-button">
            <button
              key={option.name}
              onClick={() => setSelectedOption(option.id)}
            > 
              <p className="selector-text"> {option.name} </p>
            </button>
          </div>
        ))}
      </div>
      {selectedOption === "coding" && <ProjectContainer />}
      {selectedOption === "ui" && <UIUXContainer />}
      {selectedOption === "design" && <DesignContainer />}
    </div>
  );
}
