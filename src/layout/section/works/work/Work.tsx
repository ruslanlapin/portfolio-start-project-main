import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="" />
            </ImageWrapper>


            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondary};
    max-width: 540px;
    width: 100%;
    
    ${Link} {
    padding: 10px 0;
        
        & + ${Link} {
            margin-left: 20px;
        }
}
`
const ImageWrapper = styled.div`
    position: relative;
    
    &:hover{
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.3);
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`
    
`

const Text = styled.p`
    margin: 14px 0 10px;
`