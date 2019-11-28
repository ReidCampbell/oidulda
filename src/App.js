import React from "react";
import styled from "styled-components";

import img from "./images/asset1.jpg";
import Form from "./components/Form";
import LeftText from "./components/LeftText";

const App = () => {
    return (
        <Container>
            <LeftColumn>
                <LeftText />
            </LeftColumn>
            <RightColumn>
                <Form />
            </RightColumn>
        </Container>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    flex: 1;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    width: 60vw;

    @media (max-width: 760px) {
        display: inline;
        width: 90vw;
        height: 90vh;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    position: relative;

    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    color: white;
    padding: 5% 4% 2% 5%;

    /* I wanted to keep the balloon always visible when you resize the image */
    @media (max-width: 2250px) {
        background-position: 55% 0%;
    }
    @media (max-width: 1800px) {
        background-position: 60% 0%;
    }
    @media (max-width: 1600px) {
        background-position: 60% 0%;
    }
    @media (max-width: 1200px) {
        background-position: 65% 0%;
    }
    @media (max-width: 900px) {
        background-position: 65% 0%;
    }
    @media (max-width: 760px) {
        height: 20vh;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex: 1.4;
    flex-direction: column;
    position: relative;
    background-color: white;
    padding: 4% 8% 2% 8%;
    & > p {
        font-weight: bold;
        color: #555555;
        margin: 10px 10px 20px 0px;
    }
    @media (max-width: 760px) {
        padding: 2%;
        border-radius: 0px 0px 25px 25px;
    }
`;
