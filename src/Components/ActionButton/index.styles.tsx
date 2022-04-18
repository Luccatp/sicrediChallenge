import styled, { css } from "styled-components";

interface Props {
    inverted:boolean
}

export const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    border: none;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    ${(p:Props) => p.inverted ? 
    css`
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    `:
    css``}

      
  
      
`