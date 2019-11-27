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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
`;

const LeftColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    width: 35vw;

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
        color: #555555; /* Grey */
        margin: 10px 10px 20px 0px;
    }
`;
