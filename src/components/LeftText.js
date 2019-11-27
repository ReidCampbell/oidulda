import React from "react";
import styled from "styled-components";

const LeftText = () => {
    return (
        <Text>
            <h1>REDEFINING MOBILE ADVERTISING</h1>
            <p>Please use this form to register.</p>
            <p>If you are a member, please login.</p>
        </Text>
    );
};

export default LeftText;

const Text = styled.div`
    color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    & > p {
        margin-bottom: -1em;
    }
`;
