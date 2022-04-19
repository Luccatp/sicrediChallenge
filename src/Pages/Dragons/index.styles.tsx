import styled from "styled-components";


export const DragonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: 99vw;
    min-height: 100vh;
    background-color: #eeeeee;
`

export const AddPageButton = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #64C832;
    border: 1px solid black;
    font-size: 1rem;
    position: fixed;
    top: 20px;
    right: 20px;
    color: white;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
` 