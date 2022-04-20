import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextInput } from "./index.component"

const onChangeMock = jest.fn()

const setup = () => {
    render(<TextInput onChange={onChangeMock} value="" type='text' label="Teste" maxLength={undefined}/>)
}

it('expect onChange to be called',() => {
    setup()
    const input = screen.getByTestId("input")
    userEvent.type(input, 'ola')
    expect(onChangeMock).toBeCalled()
})
