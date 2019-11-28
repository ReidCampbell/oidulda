import React from "react";
import styled from "styled-components";

const Logo = () => {
    return (
        <>
            <Image src={require("../images/asset3.png")} alt="logo" />
        </>
    );
};

export default Logo;

const Image = styled.img`
    width: 8vw;
`;
