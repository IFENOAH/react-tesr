import Greeting from './Greeting'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Greeting Component', () => {
    test('renders Hello world as a text', () => {
        //Arrange
        render(<Greeting />)
        //Act
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false})
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders Good to see you if button is NOT clicked', () => {
        //Arrange
        render(<Greeting />)
        //Act
        //Assert
        const paragraphElement = screen.getByText('nice to meet you', {exact: false})
        expect(paragraphElement).toBeInTheDocument()
    })

    test('render changed if the button waas clicked', () => {
        //Arrange
        render(<Greeting />)
        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        //Assert
        const outputElement = screen.getByText('changed', {exact: false})
        expect(outputElement).toBeInTheDocument()
    })

    test('does not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />)
        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        //Assert
        const outputElement = screen.getByText('changed', {exact: false})
        expect(outputElement).toBeInTheDocument()
    })
} )