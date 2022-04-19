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
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: white;
    border: 1px solid black;
    font-size: 3rem;
    position: fixed;
    top: 20px;
    right: 20px;
    color: white;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    @keyframes glowing {
  0% {
    background-color: #162213;
    
    background-image: linear-gradient(30%);
  }
  50% {
    background-color: #0b630b;
    background-image: linear-gradient(50%);
  }
  100% {
    background-color: black;
    background-image: linear-gradient(80%);
  }
}
    animation: glowing 5s infinite;
` 