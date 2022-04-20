import { fireEvent, render, screen } from "@testing-library/react"
import { LoginForm } from "./index.component"

const onChangeEmailMock = jest.fn()
const onChangePasswordMock = jest.fn()
const onSubmitMock = jest.fn()

const setup = () => {
    render(<LoginForm 
                onChangeEmail={onChangeEmailMock} 
                onChangePassword={onChangePasswordMock} 
                onSubmit={onSubmitMock} 
                emailValue={""} 
                passwordValue={""}
            />
    )
}

it('Testing the onSubmit',() => {
    setup()
    const form = screen.getByTestId('Form')
    fireEvent.submit(form)
    expect(onSubmitMock).toBeCalled()
})