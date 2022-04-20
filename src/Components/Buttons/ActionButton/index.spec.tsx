import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ActionButton } from "./index.component"


const onClickMock = jest.fn()

const setup1 = () => {
    render(<ActionButton type="button" inverted={false} red={false} onClick={onClickMock}>LogIn</ActionButton>)
}


it('test if button is in the doc', () => {
    setup1()
    const button = screen.getByTestId("ActionButton")
    expect(button).toBeInTheDocument()
})

it('test if the onClick is working', () => {
    setup1()
    const button = screen.getByTestId("ActionButton")
    userEvent.click(button)
    expect(onClickMock).toBeCalled()
})