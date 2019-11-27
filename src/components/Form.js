import React from "react";
import styled from "styled-components";

import Button from "../components/LoginButton";
import Logo from "../components/Logo";

const Form = () => {
    return (
        <Container>
            <Logo />

            <Title>Register</Title>

            <FormWrapper>
                <FormItem>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" />
                </FormItem>

                <FormItem>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </FormItem>

                <FormItem>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </FormItem>
            </FormWrapper>

            <BtnWrapper>
                <Button text="REGISTER" />
            </BtnWrapper>
            <BtnWrapper>
                <div
                    className="g-signin2"
                    id="google"
                    data-longtitle="true"
                ></div>
            </BtnWrapper>
        </Container>
    );
};

export default Form;

const Title = styled.p`
    margin: 2rem 0 1.5rem 0;
    color: rgb(88, 88, 88);
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
`;

const FormItem = styled.div`
    position: relative;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 15px;
    & > label {
        padding: 0 3px;
        position: absolute;
        top: -8px;
        left: 6px;
        background-color: white;
        color: grey;
    }
    & > input {
        width: 100%;
        border: 1px solid #dcdcdc;
        outline: none;
        padding: 10px;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
`;

const Container = styled.div`
    position: relative;
    margin: 35px 20px 0 20px;
    background-color: white;
`;

const FormWrapper = styled.div`
    margin-bottom: 10%;
`;
