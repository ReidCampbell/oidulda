import React from "react";
import styled from "styled-components";

const LoginButton = props => {
    return <Button>{props.text}</Button>;
};

export default LoginButton;

const Button = styled.button`
    background-color: #8d2786;
    border: none;
    font-size: 10rem;
    border-radius: 35px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 1em;
    padding: 0.75em 2em;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
`;
