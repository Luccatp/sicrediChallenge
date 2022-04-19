import { MouseEventHandler, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import ImagesApi from "../../../API/ImagesAPI/ImagesApi"
import { DragonImg, DragonInfo, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, ImageDiv } from "./index.styles"
import LogoDragon from '../../../Images/LogoDragon.png'
import { CardButtons } from "../../Buttons/CardButtons/index.styles"

interface DragonGistProps {
    handleRemoveClick: MouseEventHandler<HTMLButtonElement>;
    handleEditClick: MouseEventHandler<HTMLButtonElement>;
    createdAt: string,
    name: string,
    type: string,
    histories: string,
    id: number
}

export const DragonGist = (props:DragonGistProps) => {
    const history = useHistory()
    const [image, setImage] = useState<string>('')
    useEffect(() => {
        ImagesApi.get('').then(response => {
                const allImages = response.data.results[props.id>=30? props.id - 30 : props.id].urls.small
                setImage(allImages) 
        }).catch(() => setImage(LogoDragon))     
    }, [history, props.id])
    const date = new Intl.DateTimeFormat('pt-BR').format((new Date(props.createdAt)))
    return(
        <FlipCard>
        <FlipCardInner>
            <FlipCardFront>
                <ImageDiv>
                    <DragonImg alt='random dragons' src={image} data-testid='dragon-img'></DragonImg>
                </ImageDiv>
                    <h1>{props.name}</h1>
            </FlipCardFront>
            <FlipCardBack>
                <h1 data-testid='dragonsName'>{props.name}</h1>
                <DragonInfo>
                    <p>
                        Criado em "{date}"   
                    </p>
                    <p>
                        as "{props.createdAt.slice(11,19)}"
                    </p>
                    <p>
                        tipo: "{props.type}"
                    </p>
                    <CardButtons handleEditClick={props.handleEditClick} handleRemoveClick={props.handleRemoveClick}/>
                </DragonInfo>
            </FlipCardBack>
        </FlipCardInner>
    </FlipCard>
    )
}