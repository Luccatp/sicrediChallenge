import { render, screen } from "@testing-library/react"
import { ActionButton } from "./index.component"


const setup1 = () => {
    render(<ActionButton type="submit" inverted={false}/>)
}


it('test if button is in the doc', () => {
    setup1()
    const button = screen.getByTestId("ActionButton")
    expect(button).toBeInTheDocument()
})