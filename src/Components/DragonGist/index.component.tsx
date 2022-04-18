import { Dragon } from "../../Interfaces"
import { DragonImg, DragonInfo, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, ImageDiv } from "./index.styles"


export const DragonGist = (props:Dragon) => {
    const date = new Intl.DateTimeFormat('pt-BR').format((new Date(props.createdAt)))
    return(
        <FlipCard>
        <FlipCardInner>
            <FlipCardFront>
                <ImageDiv>
                    <DragonImg alt='random dragons' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FCommons%3AQuality_images&psig=AOvVaw3zKz_nm7yrLMfF1pV9zh0I&ust=1650393911435000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCGw8iinvcCFQAAAAAdAAAAABAI" data-testid='dragon-img'></DragonImg>
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
                </DragonInfo>
            </FlipCardBack>
        </FlipCardInner>
    </FlipCard>
    )
}