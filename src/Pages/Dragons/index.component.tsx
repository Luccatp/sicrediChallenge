import { Header } from "../../Components/Header/index.component"
import { DragonsWrapper } from "./index.styles"
import {useHistory} from 'react-router-dom'
import { CardList } from "../../Components/CardsList/index.component"

export const DragonsPage = () => {
    const history = useHistory()

    const logOutClick = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        history.push('/')
        window.localStorage.removeItem('login')
    }
    return(
    <DragonsWrapper>
        <Header onClick={logOutClick}/>
        <CardList/>
    </DragonsWrapper>
    )
}