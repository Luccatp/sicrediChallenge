import styled, { css } from "styled-components"

interface Props {
    shrink:any
  }

export const Group = styled.div`
  position: relative;
`

export const Input = styled.input`
    background: none;
    background-color: inherit;
    color: #2d2c3e;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: flex;
    width: 12rem;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
   

    &:focus {
      outline: none;
    }

    &:focus + label {
      top: -14px;
      font-size: 12px;
      color: black;
    }

    @media screen and (min-width: 1000px) {
      width: 25rem;
    }
`

export const InputLabel = styled.label`
    color: #2d2c3e;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
   
    ${(p:Props) => p.shrink ?
      css`
        top:-14px;
        font-size: 12px;
        color: black;
      `:
      css``}
      
`