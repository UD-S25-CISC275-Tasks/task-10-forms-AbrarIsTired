import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    // Array of available colors
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    // State to track the currently selected color (default to the first color)
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    // Handle color selection change
    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    // Determine text color based on background color
    function getTextColor(backgroundColor: string) {
        if (backgroundColor === "white" || backgroundColor === "cyan") {
            return "black";
        }
        return "white";
    }

    return (
        <div>
            <h3>Change Color</h3>

            {/* Radio buttons for color selection */}
            <div>
                {colors.map((color) => {
                    // Get appropriate text color for this color option
                    const textColor = getTextColor(color);

                    return (
                        <label key={color} style={{ marginRight: "10px" }}>
                            <input
                                type="radio"
                                name="colorOptions"
                                value={color}
                                checked={selectedColor === color}
                                onChange={() => {
                                    handleColorChange(color);
                                }}
                                style={{ marginRight: "5px" }}
                            />
                            <span
                                style={{
                                    backgroundColor: color,
                                    padding: "2px 8px",
                                    color: textColor
                                }}
                            >
                                {color}
                            </span>
                        </label>
                    );
                })}
            </div>

            {/* Colored box that displays the selected color */}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: getTextColor(selectedColor),
                    padding: "10px",
                    marginTop: "10px",
                    display: "inline-block"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
