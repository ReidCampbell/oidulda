import React from "react";
import styled from "styled-components";

const LoginButton = props => {
    return <Button>{props.text}</Button>;
};

export default LoginButton;

const Button = styled.button`
    display: flex;
    background-color: #8d2786;
    border: none;
    border-radius: 35px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    padding: 0.75em 2em;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    -webkit-box-shadow: -1px 6px 19px -10px rgba(0,0,0,0.72);
    -moz-box-shadow: -1px 6px 19px -10px rgba(0,0,0,0.72);
    box-shadow: -1px 6px 19px -10px rgba(0,0,0,0.72);
    }
`;
