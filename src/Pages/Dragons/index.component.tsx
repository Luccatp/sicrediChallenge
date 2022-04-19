import { Header } from "../../Components/Header/index.component"
import { DragonsWrapper } from "./index.styles"
import {useHistory} from 'react-router-dom'
import { CardList } from "../../Components/Cards/CardsList/index.component"
import React, { useContext, useEffect } from "react"
import { DragonsContext } from "../../Contexts/DragonsContext"
import { dragonsApi } from "../../API"

export const DragonsPage = () => {
    const history = useHistory()
    const {currentDragons, setDragons} = useContext(DragonsContext)

    useEffect(() => {
    }, [])

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

    const removeHandler = (id:number) => {
        dragonsApi.delete(`dragon/${id}`).then((_:any) => {
            let filteredDragons = currentDragons.filter((a: any) => {
            return a.id !== id
        })
        setDragons(filteredDragons)

    })
    }

    return(
    <DragonsWrapper>
        <Header onClick={logOutClick}/>
        <CardList handleEditClick={editHandler} handleRemoveClick={removeHandler}/>
    </DragonsWrapper>
    )
}