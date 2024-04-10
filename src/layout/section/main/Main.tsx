import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/foto.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am Ruslan Lapin</Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>

                    < Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #d6f55b;
    display: flex;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    letter-spacing: 0%;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 5%;
    margin: 10px 0px;
   
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`