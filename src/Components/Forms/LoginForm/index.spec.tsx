import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginForm } from "./index.component"

const onChangeEmailMock = jest.fn()
const onChangePasswordMock = jest.fn()
const onSubmitMock = jest.fn()

const setup = () => {
    render(<LoginForm onChangeEmail={onChangeEmailMock} onChangePassword={onChangePasswordMock} onSubmit={onSubmitMock} emailValue={""} passwordValue={""}/>)
}

it('Testing the onSubmit',() => {
    setup()
    const button = screen.getByTestId("ActionButton")
    userEvent.click(button)
    expect(onSubmitMock).toBeCalled()
})