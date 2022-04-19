import styled from "styled-components"

export const ButtonsDiv = styled.div`
	display: flex;
    justify-content: space-between;
    margin-right: 10px;
    margin-left: 10px;
`

export const EditButton = styled.button`
	 background: #71e19a;
	font-size: 10px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 2px solid #000000;
	text-transform: uppercase;
	font-weight: 700;
    justify-content: center;
    justify-items: right;
	width: 5rem;
	color: #000000;
	box-shadow: 0px 2px 2px #000000;
	cursor: pointer;
	transition: .35s;
` 

export const RemoveButton = styled.button`
	background: red;
	font-size: 10px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 2px solid #000000;
	text-transform: uppercase;
	font-weight: 700;
    justify-content: center;
    justify-items: right;
	width: 5rem;
	color: #ffffff;
	box-shadow: 0px 2px 2px #000000;
	cursor: pointer;
	transition: .35s;
`