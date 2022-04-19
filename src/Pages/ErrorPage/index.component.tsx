import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { dragonsApi } from "../../API"



export const ErrorPage = () => {
    const history = useHistory()
    useEffect(() => {
        dragonsApi.get('dragon').then(() => {
            history.push('/dragon')
        })
    }, [])
    return(<h1>Error</h1>)
}