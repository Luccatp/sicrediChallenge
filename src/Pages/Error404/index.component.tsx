import React from "react";
import { useHistory } from "react-router-dom";
import { ActionButton } from "../../Components/Buttons/ActionButton/index.component";
import { ErrorCode, ErrorWrapper } from "./index.styles";




export const Error404 = () => {
    const history = useHistory()

    const goBackButton = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        history.goBack()
    }

   return( 
        <ErrorWrapper>
            <ErrorCode>ERROR 404</ErrorCode>
            <ActionButton type={"button"} children={"Go Back"} onClick={goBackButton}/>
        </ErrorWrapper>
    )
}