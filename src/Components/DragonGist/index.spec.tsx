import { render } from "@testing-library/react"
import { DragonGist } from "./index.component"


const setup = () => {
    render(<DragonGist createdAt={""} name={""} type={""} histories={""} id={0}/>)
}