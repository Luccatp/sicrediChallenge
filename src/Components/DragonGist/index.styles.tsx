import styled from 'styled-components'

export const FlipCard = styled.div`
    background-color: transparent;
    width: 19rem;
    height: 15rem;
    perspective: 1000px;
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DragonImg = styled.img`
    height: 12rem;
    width: 12rem;
    border-radius: 10px;
    margin-top: 5px;
`

export const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &:hover{
        transform: rotateY(180deg);
    }
` 

const FlipCardBackFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
`

export const FlipCardFront = styled(FlipCardBackFront)`
    background-color: #eeeeee;
    color: black;
    border-radius: 30px;
    border: 3px solid black;
    display: grid;
    grid-template-rows: auto;

    & h1{
        font-weight: bold;
        display: flex;
        align-items:baseline;
        justify-content: center;
    }
`

export const FlipCardBack = styled(FlipCardBackFront)`
    background-color: #b7bdb6;
    color: black;
    transform: rotateY(180deg);
    border-radius: 20px;
    border: none;

    & h1{
        border-bottom: 1px solid white;
    }
`

export const DragonInfo = styled.div`
    font-size: x-large;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`