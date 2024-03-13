import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"} />
                <Field placeholder={"subject"} />
                <Field placeholder={"message"} as={"textarea"} />
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: rgb(194, 248, 101);
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input`
    
`
