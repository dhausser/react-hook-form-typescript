import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Index from '../../pages/index'

describe('Home page', () => {
  it('sign up page title', () => {
    const { getByText } = render(<Index />)
    const titleElement = getByText('Sign Up')
    console.log(titleElement)
    expect(titleElement).toBeInTheDocument()
  })

  it('first name input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('First Name')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('last name input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('Last Name')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('gender input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('Gender')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('username input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('Username')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('username input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('Username')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('email input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('Email')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('age input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('Age')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('about you input field', () => {
    const { getByText } = render(<Index />)
    const inputElement = getByText('About you')
    console.log(inputElement)
    expect(inputElement).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Index />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Index />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
