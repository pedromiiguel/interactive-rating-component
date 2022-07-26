import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Option } from '.'

describe('<Option/>', () => {
  it('should render the option', async () => {
    const onChange = jest.fn()

    render(
      <Option
        name="teste"
        id="teste"
        label="Label"
        value="teste"
        onChange={onChange}
      />
    )

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Label')).toHaveAttribute('for', 'teste')

    fireEvent.click(screen.getByRole('radio'))

    await waitFor(() => {
      expect(onChange).toBeCalledTimes(1)
    })
  })
})
