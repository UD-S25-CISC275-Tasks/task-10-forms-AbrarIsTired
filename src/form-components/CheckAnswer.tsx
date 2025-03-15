import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track what the user has typed in the input field
    // useState hook initializes the state with an empty string
    const [userAnswer, setUserAnswer] = useState<string>("");

    // Determine if the answer is correct by comparing user input with expected answer
    const isCorrect = userAnswer === expectedAnswer;

    // Determine which feedback symbol to display
    let feedbackSymbol;
    if (isCorrect) {
        feedbackSymbol = "✔️";
    } else {
        feedbackSymbol = "❌";
    }

    return (
        <div>
            <h3>Check Answer</h3>

            {/* Input field for the user to type their answer */}
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => {
                    setUserAnswer(e.target.value);
                }}
                placeholder="Type in an Answer"
            />

            {/* Display feedback based on whether the answer is correct */}
            <div>{feedbackSymbol}</div>
        </div>
    );
}
