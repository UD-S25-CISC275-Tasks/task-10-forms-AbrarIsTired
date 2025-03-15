import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * ShoveBox Component
 *
 * A simple interactive component that displays a blue box that can be moved
 * to the right by clicking a button. Each click increases the box's position
 * by 4 pixels.
 *
 * State:
 * - position: Tracks the horizontal position of the box in pixels
 */
export function ShoveBox(): React.JSX.Element {
    // State to track the horizontal position of the box (starts at 10px)
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <Button
                    onClick={() => {
                        // Increment position by 4px when the button is clicked
                        setPosition(position + 4);
                    }}
                >
                    Shove the Box
                </Button>
                <div
                    data-testid="moveable-box"
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "lightblue",
                        border: "1px solid blue",
                        display: "inline-block",
                        verticalAlign: "bottom",
                        marginLeft: position + "px" // Apply the position state to marginLeft
                    }}
                ></div>
            </div>
        </div>
    );
}
