import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State to track if we're in edit mode
    const [editMode, setEditMode] = useState<boolean>(false);

    // State to track the user's name (initially "Your Name")
    const [name, setName] = useState<string>("Your Name");

    // State to track if the user is a student (initially true)
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            {/* Switch to toggle between view mode and edit mode */}
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="editModeSwitch"
                    checked={editMode}
                    onChange={() => {
                        setEditMode(!editMode);
                    }}
                />
                <label className="form-check-label" htmlFor="editModeSwitch">
                    Edit Mode
                </label>
            </div>

            {/* Show different content based on the mode */}
            {editMode ? (
                <div>
                    {/* Edit form */}
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="studentCheck"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="studentCheck"
                        >
                            Student
                        </label>
                    </div>
                </div>
            ) : (
                /* Display view */
                <div>
                    <p>
                        {name} is {isStudent ? "a" : "not a"} student
                    </p>
                </div>
            )}
        </div>
    );
}
