import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Index from '../../pages/index'

describe('Home page', () => {
  it('renders deploy link', () => {
    const { getByText } = render(<Index />)
    const linkElement = getByText('Sign Up')
    console.log(linkElement)
    expect(linkElement).toBeInTheDocument()
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
