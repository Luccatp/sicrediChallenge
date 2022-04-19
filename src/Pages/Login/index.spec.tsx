import { render, screen } from "@testing-library/react"
import { LoginPage } from "./index.component"


const setup = () => {
    render(<LoginPage/>)
}

it('if the login title is being rendered',() => {
    setup()
    const LoginTitle = screen.getByTestId('LoginTitle')
    expect(LoginTitle).toBeInTheDocument()
})