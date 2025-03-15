import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Array of colors to cycle through
 */
export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

/**
 * Interface for the ChangeColor component props
 */
interface ChangeColorProps {
    colorIndex: number; // Current color index
    setColorIndex: React.Dispatch<React.SetStateAction<number>>; // Function to update color index
}

/**
 * ChangeColor Component
 *
 * A button component that cycles through colors when clicked.
 * It receives the current color index and a setter function from the parent.
 *
 * @param colorIndex - The current index in the COLORS array
 * @param setColorIndex - Function to update the color index
 */
function ChangeColor({
    colorIndex,
    setColorIndex
}: ChangeColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                // Move to the next color in the array (wrapping around when needed)
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

/**
 * Interface for the ColorPreview component props
 */
interface ColorPreviewProps {
    colorIndex: number; // Current color index
}

/**
 * ColorPreview Component
 *
 * A visual component that displays a colored box based on the current color index.
 *
 * @param colorIndex - The current index in the COLORS array
 */
function ColorPreview({ colorIndex }: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex], // Apply the color from the COLORS array
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

/**
 * ColoredBox Component
 *
 * The main component that demonstrates component composition and state sharing.
 * It manages the color state and passes it down to child components.
 *
 * State:
 * - colorIndex: Tracks the current index in the COLORS array
 */
export function ColoredBox(): React.JSX.Element {
    // State to track the current color index (starts with the default color)
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
