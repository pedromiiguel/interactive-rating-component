import { render, screen } from '@testing-library/react'
import { StepTwo } from '.'

describe('<StepTwo/>', () => {
  it('should render the step two template', () => {
    render(<StepTwo feedback="1" options={['1', '2', '3', '4']} />)

    expect(screen.getByText('You selected 1 out of 4')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Thank you!/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
      )
    ).toBeInTheDocument()
  })
})
