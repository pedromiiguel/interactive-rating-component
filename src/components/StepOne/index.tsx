import { Option } from '../Option'
import React, { FormEvent } from 'react'
import styles from 'styles/stepOne.module.css'

type StepOneProps = {
  feedback: string | null
  onFeedback: (value: string) => void
  options: string[]
  goToNextStep: () => void
}

export function StepOne({
  feedback,
  onFeedback,
  options,
  goToNextStep
}: StepOneProps) {
  const handleChange = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement

    onFeedback(value)
  }

  const handleClick = () => {
    goToNextStep()
  }

  return (
    <>
      <div className={styles.star}>
        <img src="/images/icon-star.svg" alt="Estrela laranja" />
      </div>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.options}>
        {options.map((value) => (
          <Option
            key={value}
            name="feedback"
            onChange={handleChange}
            label={value}
            id={value}
            value={value}
          />
        ))}
      </div>
      <button
        className={styles.submitButton}
        onClick={handleClick}
        disabled={!feedback}
      >
        Submit
      </button>
    </>
  )
}
