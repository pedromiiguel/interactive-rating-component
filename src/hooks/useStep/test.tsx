import { useStep } from '.'
import { renderHook, act } from '@testing-library/react-hooks'

describe('<useStep/>', () => {
  it('should return next step', () => {
    const { result } = renderHook(() => useStep(5))

    act(() => {
      result.current[1].goToNextStep()
    })
    expect(result.current[1].canGoToNextStep).toBe(true)
    expect(result.current[0]).toBe(2)
  })

  it('should return previous step', () => {
    const { result } = renderHook(() => useStep(5))

    act(() => {
      result.current[1].goToNextStep()
      result.current[1].goToNextStep()
    })

    act(() => {
      result.current[1].goToPrevStep()
    })
    expect(result.current[1].canGoToPrevStep).toBe(true)
    expect(result.current[0]).toBe(2)
  })

  it('should return initial step', () => {
    const { result } = renderHook(() => useStep(5))

    act(() => {
      result.current[1].goToNextStep()
      result.current[1].goToNextStep()
      result.current[1].goToNextStep()
      result.current[1].goToNextStep()
    })

    act(() => {
      result.current[1].reset()
    })
    expect(result.current[0]).toBe(1)
  })

  it('should return specific step', () => {
    const { result } = renderHook(() => useStep(10))

    act(() => {
      result.current[1].setStep(8)
    })

    expect(result.current[0]).toBe(8)
  })

  it('should return error', async () => {
    const { result } = renderHook(() => useStep(10))

    expect(() => result.current[1].setStep(20)).toThrow(
      new Error('Step not valid')
    )
  })
})
