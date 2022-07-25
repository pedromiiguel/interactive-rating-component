import React, { FormEvent, InputHTMLAttributes } from 'react';
import styles from 'styles/option.module.css';

type OptionProps = {
  onChange: (event: FormEvent) => void;
  label: string;
  name: string;
  id: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Option({
  onChange,
  label,
  name,
  id,
  value,
  ...rest
}: OptionProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />

      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
