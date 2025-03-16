import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // Initialize with the first option
    const [selectedOption, setSelectedOption] = useState(options[0]);

    // Determine the feedback symbol using an if statement
    let feedbackSymbol;
    if (selectedOption === expectedAnswer) {
        feedbackSymbol = "✔️";
    } else {
        feedbackSymbol = "❌";
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <select
                value={selectedOption}
                onChange={(e) => {
                    setSelectedOption(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <div>{feedbackSymbol}</div>
        </div>
    );
}
