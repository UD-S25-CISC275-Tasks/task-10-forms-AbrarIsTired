import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

/**
 * Predefined list of people that can be added to the team
 */
const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

/**
 * ChooseTeam Component
 *
 * A component that allows users to build a team by selecting people from a predefined list.
 * Users can add team members (preventing duplicates) and clear the team.
 *
 * State:
 * - team: An array of strings representing the current team members
 */
export function ChooseTeam(): React.JSX.Element {
    //const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    // State to track the current team members (initially empty)
    const [team, setTeam] = useState<string[]>([]);

    /**
     * Adds a new member to the team if they're not already in it
     * @param newMember - The name of the person to add to the team
     */
    function chooseMember(newMember: string) {
        // Check if the member is already in the team to avoid duplicates
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    /**
     * Resets the team to an empty array
     */
    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {/* Map through the list of people to create add buttons */}
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {/* Display the current team members as a list */}
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
