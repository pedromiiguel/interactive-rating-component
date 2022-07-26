import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { StepOne } from '.'

describe('<Card/>', () => {
  const onFeedback = jest.fn()
  const goToNextStep = jest.fn()
  it('should render the step one', () => {
    render(
      <StepOne
        feedback="1"
        options={['1', '2', '3', '4']}
        onFeedback={onFeedback}
        goToNextStep={goToNextStep}
      />
    )

    expect(
      screen.getByRole('img', { name: /Estrela laranja/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /How did we do?/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
      )
    ).toBeInTheDocument()

    expect(screen.getAllByRole('radio')).toHaveLength(4)

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('should execute onFeedback', async () => {
    render(
      <StepOne
        feedback="1"
        options={['1', '2', '3', '4']}
        onFeedback={onFeedback}
        goToNextStep={goToNextStep}
      />
    )

    fireEvent.click(screen.getAllByRole('radio')[0])
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(onFeedback).toBeCalledTimes(1)
      expect(goToNextStep).toBeCalledTimes(1)
    })
  })
})
