import { Header } from "../../Components/Header/index.component"
import { DragonsWrapper } from "./index.styles"
import {useHistory} from 'react-router-dom'
import { CardList } from "../../Components/Cards/CardsList/index.component"
import React from "react"

export const DragonsPage = () => {
    const history = useHistory()

    const logOutClick = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        history.push('/')
        window.localStorage.removeItem('login')
    }

    const editHandler = (id:number, name:string, type:string, createdAt:string) => {
        history.push({
            pathname: '/editDragons',
            search: `${id}`,
            state: {id, name, type, createdAt}
        })
    }

    return(
    <DragonsWrapper>
        <Header onClick={logOutClick}/>
        <CardList handleEditClick={editHandler} handleRemoveClick={() => null}/>
    </DragonsWrapper>
    )
}