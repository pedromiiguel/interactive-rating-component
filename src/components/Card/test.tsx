import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('<Card/>', () => {
  it('should render the card', () => {
    const { container } = render(
      <Card>
        <h1>teste</h1>
      </Card>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <article
        class="card"
      >
        <h1>
          teste
        </h1>
      </article>
    `)
    expect(screen.getByRole('heading', { name: /teste/i })).toBeInTheDocument()
  })
})
