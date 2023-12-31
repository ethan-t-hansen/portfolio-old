"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProjectContainer, DesignContainer, UIUXContainer } from "./Exports";

export default function Selector() {
  const Dot = <Image src="https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338779/ellipse_hc8bka.svg" width={6} height={6} alt="Ellipse" />;

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
          <div className="selector-icon" key={option.id}>
            <div className={selectedOption === option.id ? 'option-icon' : 'option-icon-hidden'} key={option.name}>
              {option.icon}
            </div>
            {/* {selectedOption === option.id && (
              <div className='option-icon' key={option.name}>{option.icon}</div>
            )} */}
          </div>
        ))}

        {options.map((option) => (
          <div className="selector-button" key={option.id}>
            <button
              key={option.name}
              onClick={() => setSelectedOption(option.id)}
              className="selector-text"
            > 
              {option.name}
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
