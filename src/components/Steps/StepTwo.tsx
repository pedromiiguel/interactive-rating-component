/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from 'styles/stepTwo.module.css';

type StepTwoProps = {
  feedback: string | null;
  options: string[];
};

export function StepTwo({ feedback, options }: StepTwoProps) {
  return (
    <div className={styles.container}>
      <img src="/images/illustration-thank-you.svg" alt="Celular" />
      <div className={styles.chip}>
        You selected {feedback} out of {options.length}
      </div>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
