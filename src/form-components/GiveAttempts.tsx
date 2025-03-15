import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    // State to track the number of attempts left (initially 3)
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    // State to track the number of attempts the user wants to gain
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    /**
     * Decreases the attempts left by 1
     */
    const useAttempt = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    /**
     * Increases the attempts left by the amount specified in the input
     * Only works if the input can be parsed as a valid number
     */
    const gainAttempts = () => {
        // Check if the input is a valid number
        const amount = parseInt(requestedAttempts);

        // Only add attempts if the parsed value is a valid number
        if (!isNaN(amount)) {
            setAttemptsLeft(attemptsLeft + amount);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>

            {/* Display the number of attempts left */}
            <div>Attempts left: {attemptsLeft}</div>

            {/* Input for specifying the number of attempts to gain */}
            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => {
                    setRequestedAttempts(e.target.value);
                }}
                placeholder="Add # of Attempts"
            />

            {/* Buttons to use or gain attempts */}
            <button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                Use
            </button>

            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
