import styled from "styled-components";



export const CardListDiv = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    row-gap: 10vh;
    margin-top: 2rem;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 850px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`