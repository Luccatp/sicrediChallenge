import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    border: 3px solid black;
    height: fit-content;
    padding: 20px;
    background-color: white;
    justify-items:center;

    @media screen and (min-width: 1000px) {
        width:30rem
    }
`

