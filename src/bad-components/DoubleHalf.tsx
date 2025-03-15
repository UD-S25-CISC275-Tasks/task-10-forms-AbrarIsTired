import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * DoubleHalf Component
 *
 * A simple component that displays a numeric value and two buttons:
 * one to double the value and another to halve it.
 *
 * State:
 * - dhValue: The current numeric value to be doubled or halved
 */
export function DoubleHalf(): React.JSX.Element {
    // State to track the numeric value (starts at 10)
    const [dhValue, setDhValue] = useState<number>(10);

    /**
     * Doubles the current value when the "Double" button is clicked
     */
    const handleDouble = (): void => {
        setDhValue(2 * dhValue);
    };

    /**
     * Halves the current value when the "Halve" button is clicked
     */
    const handleHalve = (): void => {
        setDhValue(0.5 * dhValue);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={handleDouble}>Double</Button>
            <Button onClick={handleHalve}>Halve</Button>
        </div>
    );
}
